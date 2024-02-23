"use client";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";

import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";

import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { setCodeValue } from "@/lib/redux/compilerSlice";

const CodeEditor = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: any) => state.compiler.currentLanguage
  );

  const fullCode = useSelector((state: any) => state.compiler.fullCode);

  const onChange = React.useCallback((val: string) => {
    dispatch(setCodeValue(val));
  }, []);
  return (
    <CodeMirror
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
      value={fullCode[currentLanguage]}
      height="100vh"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
