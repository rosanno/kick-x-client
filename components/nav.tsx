"use client";

import Link from "next/link";
import { Search, Heart } from "lucide-react";
import { BsHandbag } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

import { useScrollHide } from "@/hooks/use-scroll-hide";
import { cn } from "@/lib/utils";

import { Logo } from "./ui/logo";

export const Nav = () => {
  const { isScrolledUp } = useScrollHide();

  return (
    <header
      className={cn(
        "fixed inset-0 w-full max-w-7xl mx-auto z-20 transition-all duration-300 ease-in-out h-20 px-4 sm:px-12 flex items-center justify-between",
        isScrolledUp
          ? "translate-y-0 bg-white"
          : "-translate-y-full opacity-0"
      )}
    >
      <div role="button">
        <CgMenuRight className="text-2xl" />
      </div>
      <Link href="/" className="text-xl font-extrabold">
        <Logo />
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <div role="button">
          <Search className="h-5 w-5" />
        </div>
        <div className="border-l h-3" />
        <div role="button">
          <Heart className="h-5 w-5" />
        </div>
        <div className="border-l h-3" />
        <div role="button">
          <BsHandbag className="text-xl" />
        </div>
      </div>
    </header>
  );
};
