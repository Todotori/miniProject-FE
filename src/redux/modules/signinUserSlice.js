import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
    isLoading: false,
    error: null,
    response: null
}

export const signinUserThunk = createAsyncThunk("users/signinUser", async (user, thunk) => {
    try {
        const response = await api.post("/api/login", user);
        const {data} = response;
        const token = response.headers["authorization"].split(" ")[1];
        if (data.success) {
            return thunk.fulfillWithValue(token);
        } else {
            const {code} = data.error;
            return thunk.rejectWithValue(code);
        }
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});

const signinUserSlice = createSlice({
    name: "signinUser",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signinUserThunk.pending, (state) => {
            state.isLoading = true;
        }).addCase(signinUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.response = action.payload;
        }).addCase(signinUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default signinUserSlice.reducer;