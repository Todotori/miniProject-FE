import createUser from "./modules/createUserSlice";
import signinUser from "./modules/signinUserSlice";
import todos from "./modules/todos";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        signinUser,
        createUser,
        todos,
    },
});

export default store;
