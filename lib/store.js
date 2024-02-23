import { configureStore } from "@reduxjs/toolkit";
import compiler from "./redux/compilerSlice";

export const store = configureStore({
  reducer: { compiler },
});
