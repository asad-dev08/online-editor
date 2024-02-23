import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerInitialStateType {
  fullCode: { html: string; css: string; javascript: string };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerInitialStateType = {
  fullCode: {
    html: "",
    css: "",
    javascript: "",
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState,
  reducers: {
    setCurrentLanguage: (
      state,
      action: PayloadAction<CompilerInitialStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    setCodeValue: (state, action) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export const { setCurrentLanguage, setCodeValue } = compilerSlice.actions;
export default compilerSlice.reducer;
