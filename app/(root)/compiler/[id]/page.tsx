"use client";
import React, { useEffect } from "react";
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
import { Code, Copy, Save, Share2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerInitialStateType,
  setAllCodeValue,
  setCurrentLanguage,
} from "@/lib/redux/compilerSlice";
import RenderCode from "@/components/render-code";
import { getCodeByCompilerId, saveCode } from "@/actions/crudEditor";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CompilerPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch();
  const defaultLanguage = useSelector(
    (state: any) => state.compiler.currentLanguage
  );
  const fullCode = useSelector((state: any) => state.compiler.fullCode);

  useEffect(() => {
    const fetchCode = async () => {
      const existingCode = await getCodeByCompilerId(params.id);
      if (existingCode && existingCode.data !== null) {
        dispatch(setAllCodeValue(existingCode.data as string));
      } else {
        dispatch(
          setAllCodeValue({
            html: "",
            css: "",
            javascript: "",
          })
        );
      }
    };
    fetchCode();
  }, [params.id]);

  const handleSave = async () => {
    try {
      const result = await saveCode({
        fullCode: fullCode,
        id: params.id,
      });
      if (!result) return null;
      toast(result && result.message);
    } catch (error: any) {
      console.log(error);
      toast(error);
    }
  };
  const handleCopy = () => {
    window.navigator.clipboard.writeText(window.location.href);
    toast("URL copied to clipboard");
  };
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full min-h-[calc(100vh-64px)]  border"
    >
      <ResizablePanel defaultSize={50} className="min-w-[350px]">
        <div className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-x-2">
            <Button className=" gap-x-2" onClick={handleSave}>
              <Save className="size-4" />
              Save
            </Button>
            <Dialog>
              <DialogTrigger className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md">
                <Share2 className="size-4" />
                Share
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <Code /> Share your code 😎
                  </DialogTitle>
                  <DialogDescription>
                    <div className="w-full flex items-center gap-3">
                      <Input
                        disabled
                        type="text"
                        value={global?.window?.location.href}
                        className="w-full px-4 py-2 rounded-md bg-accent"
                      />
                      <Button
                        className="bg-emerald-500 hover:bg-emerald-600 text-white"
                        variant="outline"
                        onClick={handleCopy}
                      >
                        <Copy size={15} /> &nbsp; Copy URL
                      </Button>
                    </div>
                    <span className="text-xs text-emerald-500 font-semibold">
                      Share this URL with your friend s to collaborate
                    </span>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
