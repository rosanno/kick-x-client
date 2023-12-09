"use client";

import { featured } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Featured = () => {
  return (
    <section className="px-4 sm:px-10 mt-10 md:mt-28">
      <article className="space-y-6 md:space-y-10">
        <div className="flex items-center gap-2 md:gap-10">
          <div className="w-[160px] lg:w-[130px]">
            <p className="text-[10px] md:text-sm">
              {featured.description}
            </p>
          </div>
          <div className="w-full xl:w-[700px]">
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-7xl font-medium uppercase leading-tight"
              )}
            >
              {featured.title}
            </h1>
          </div>
        </div>
        <div className="bg-[#EBEBEB] p-5 sm:p-6 h-full lg:h-[790px] w-full relative">
          <Image
            src={featured.img_path}
            alt="featured"
            width={1000}
            height={1000}
            className="object-contain h-full w-full"
          />
          <div className="absolute left-6 top-5 md:top-11 md:left-10">
            <h2 className="text-xl md:text-2xl font-extrabold">
              Kick X
            </h2>
          </div>
        </div>
      </article>
    </section>
  );
};
