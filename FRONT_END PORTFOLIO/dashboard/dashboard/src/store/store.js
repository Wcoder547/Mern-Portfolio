import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";
import forgotPasswordReducer from "./slices/forgotResetPasswordSlice.js";
import messageReducer from "./slices/messageSlice.js";
import timelineReducer from "./slices/timelineSlice.js";
import skillReducer from "./slices/skillSlice.js";
import softwareApplicationReducer from "./slices/softwareApplicationSlice.js";
import projectReducer from "./slices/projectSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    forgotPassword: forgotPasswordReducer,
    messages: messageReducer,
    timeline: timelineReducer,
    skill: skillReducer,
    softwareApplications: softwareApplicationReducer,
    project: projectReducer,
  },
});
