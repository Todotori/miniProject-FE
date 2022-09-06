import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
    response: null,
    isLoading: false,
    error: null
}

export const createUserThunk = createAsyncThunk("users/createUser", async (newUser, thunk) => {
    try {
        const {data} = await api.post("/api/signup", newUser);
        if (data.success) {
            return thunk.fulfillWithValue(data.data);
        } else {
            const {code} = data.error;
            return thunk.rejectWithValue(code);
        }
    } catch (error) {
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
