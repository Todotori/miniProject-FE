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
            const response = await api.post("/login", user);
            console.dir(response);
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
    name: "signinUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInUserThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signInUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
            })
            .addCase(signInUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default signInUserSlice.reducer;
