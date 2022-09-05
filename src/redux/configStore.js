import users from "./modules/usersSlice";
import todos from "./modules/todos";
import tags from "./modules/tagSlice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users,
    todos,
    tags,
  },
});

export default store;
