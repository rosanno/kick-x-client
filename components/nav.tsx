"use client";

import Link from "next/link";
import { Search, Heart } from "lucide-react";
import { BsHandbag } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

export const Nav = () => {
  return (
    <header className="h-20 px-4 sm:px-10 flex items-center justify-between">
      <div role="button">
        <CgMenuRight className="text-2xl" />
      </div>
      <Link href="/" className="text-xl font-extrabold">
        Kick X
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
