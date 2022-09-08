import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
    isLoading: false,
    error: null,
    response: null,
};

export const signInUserThunk = createAsyncThunk(
    "users/signInUser",
    async (user, thunk) => {
        try {
            const response = await api.post("http://3.34.90.63/api/login", user);
            const {data} = response;
            if (data.success) {
                if (!response.headers["authorization"]) {
                    return thunk.rejectWithValue("TOKEN_NOT_SENT");
                }
                const token = response.headers["authorization"].split(" ")[1];
                const userID = data.data.id;
                return thunk.fulfillWithValue({token, userID});
            } else {
                const {code} = data.error;
                return thunk.rejectWithValue(code);
            }
        } catch (error) {
            return thunk.rejectWithValue(error);
        }
    }
);

const signInUserSlice = createSlice({
    name: "signInUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInUserThunk.pending, (state) => {
                state.isLoading = true;
                state.response = null;
                state.error = null;
            })
            .addCase(signInUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
                state.error = null;
            })
            .addCase(signInUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.response = null;
                state.error = action.payload;
            });
    },
});

export default signInUserSlice.reducer;
