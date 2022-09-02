import users from "./modules/users";
import todos from "./modules/todos";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users,
    todos,
  },
});

export default store;
