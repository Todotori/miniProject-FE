import createUser from "../modules/createUserSlice";
import signinUser from "../modules/signinUserSlice";
import checkEmail from "../modules/checkEmailSlice";
import checkUsername from "../modules/checkUsernameSlice";
import todos from "../modules/todos";
import tags from "../modules/tagSlice";
import userInfo from "../modules/userInfoSlice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    checkUsername,
    checkEmail,
    signinUser,
    createUser,
    todos,
    tags,
    userInfo,
  },
});

export default store;
