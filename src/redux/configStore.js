import createUser from "./modules/createUserSlice";
import signinUser from "./modules/signinUserSlice";
import checkEmail from "./modules/checkEmailSlice";
import todos from "./modules/todos";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        checkEmail,
        signinUser,
        createUser,
        todos,
    },
});

export default store;
