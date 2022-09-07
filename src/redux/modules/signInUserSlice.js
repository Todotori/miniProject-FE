import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  isLoading: false,
  error: null,
  response: null,
};

<<<<<<< HEAD:src/redux/modules/signinUserSlice.js
export const signinUserThunk = createAsyncThunk(
  "users/signinUser",
  async (user, thunk) => {
    try {
      const response = await api.post("/login", user);
      console.dir(response);
      const {data} = response;
      if (data.success) {
        if (!response.headers["authorization"]) {
          return thunk.rejectWithValue("TOKEN_NOT_SENT");
=======
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
>>>>>>> 05dbe7a19ee2505296f5d9ca9d1a8fc9a53e6ffb:src/redux/modules/signInUserSlice.js
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

<<<<<<< HEAD:src/redux/modules/signinUserSlice.js
const signinUserSlice = createSlice({
  name: "signinUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signinUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(signinUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
=======
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
>>>>>>> 05dbe7a19ee2505296f5d9ca9d1a8fc9a53e6ffb:src/redux/modules/signInUserSlice.js
});

export default signInUserSlice.reducer;
