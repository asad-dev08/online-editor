"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CodeEditor from "@/components/code-editor";
import { Button } from "@/components/ui/button";
import { Save, Share2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerInitialStateType,
  setCurrentLanguage,
} from "@/lib/redux/compilerSlice";
import RenderCode from "@/components/render-code";

const CompilerPage = () => {
  const dispatch = useDispatch();
  const defaultLanguage = useSelector(
    (state: any) => state.compiler.currentLanguage
  );
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full min-h-[calc(100vh-64px)]  border"
    >
      <ResizablePanel defaultSize={50} className="min-w-[350px]">
        <div className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-x-2">
            <Button className=" gap-x-2">
              <Save className="size-4" />
              Save
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 gap-x-2">
              <Share2 className="size-4" />
              Share
            </Button>
          </div>
          <div className="flex items-center gap-x-2">
            <label className="hidden lg:flex text-xs font-semibold">
              Current Language:
            </label>
            <Select
              defaultValue={defaultLanguage}
              onValueChange={(value) =>
                dispatch(
                  setCurrentLanguage(
                    value as CompilerInitialStateType["currentLanguage"]
                  )
                )
              }
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Select a Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="javascript">Javascript</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className="min-w-[350px]">
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default CompilerPage;
