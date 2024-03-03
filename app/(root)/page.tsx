"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { v4 as uuid4 } from "uuid";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    const id = uuid4();
    return router.push(`/compiler/${id}`);
  };
  return (
    <div className="h-[calc(100vh-64px)] w-full flex-col gap-6 flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-200 dark:from-slate-600 dark:to-slate-800">
      <h2 className="text-blue-500 font-bold text-5xl text-center">
        Your Virtual <br />
        <span className="text-emerald-500">Coding</span> Playground
      </h2>
      <p className="max-w-2xl text-center text-gray-600 font-semibold text-sm dark:text-slate-300">
        This is an intuitive online code editor designed for seamless
        collaboration and efficient coding. Experience real-time collaboration,
        syntax highlighting, and a distraction-free environment, empowering
        developers to bring their code to life effortlessly. Elevate your coding
        experience with CodeSphere.
      </p>
      <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleClick}>
        Lets Start &nbsp;&nbsp; <ArrowRight size={15} />
      </Button>
    </div>
  );
}
