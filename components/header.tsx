"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";
import { v4 as uuid4 } from "uuid";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    const id = uuid4();
    return router.push(`/compiler/${id}`);
  };
  return (
    <nav className="w-full h-16 bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-3 flex items-center justify-between">
      <Link href="/">
        <h2 className="flex items-center gap-2 font-semibold text-xl">
          <img src="/assets/images/logo.svg" className="size-8" /> Online
          Compiler
        </h2>
      </Link>
      <div className="flex items-center gap-x-4">
        <Button variant="outline" onClick={handleClick}>
          Compiler
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
