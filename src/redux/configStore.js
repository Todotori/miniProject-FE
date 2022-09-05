import createUser from "./modules/createUserSlice";
import todos from "./modules/todos";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        createUser,
        todos,
    },
});

export default store;
