import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
    response: null,
    isLoading: false,
    error: null
}

export const createUserThunk = createAsyncThunk("users/createUser", async (newUser, thunk) => {
    try {
        const response = await api.post("/signup", newUser);
        const {data} = response;
        if (!response.headers["authorization"]) {
            return thunk.rejectWithValue("TOKEN_NOT_SENT");
        }
        if (data.success) {
            const token = response.headers["authorization"].split(" ")[1];
            const userID = data.data.id;
            return thunk.fulfillWithValue({token, userID});
        } else {
            const {code} = data.error;
            return thunk.rejectWithValue(code);
        }
    } catch (error) {
        console.dir(error);
        return thunk.rejectWithValue(error);
    }
})

const createUserSlice = createSlice({
    name: "createUser",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createUserThunk.pending, (state) => {
            state.isLoading = true;
        }).addCase(createUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.response = action.payload;
        }).addCase(createUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});

export default createUserSlice.reducer;
