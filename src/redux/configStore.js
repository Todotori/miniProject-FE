import users from "./modules/usersSlice";
import todos from "./modules/todos";
import check from "./modules/checkSlice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        users,
        todos,
        check,
    },
});

export default store;
