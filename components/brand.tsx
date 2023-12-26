"use client";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

interface BrandProps {
  brands: {
    id: string;
    brand_name: string;
    brand_logo: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export const Brands = ({ brands }: BrandProps) => {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <div className="hidden md:flex flex-col">
          <h1 className="text-xs md:text-[13px]">
            Top rated
          </h1>
          <h2 className="font-semibold text-base md:text-lg uppercase">
            Brands
          </h2>
        </div>
        <div className="w-full md:w-auto flex items-center justify-center gap-9">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="flex items-center justify-center gap-1.5"
            >
              {brand.brand_logo !== null && (
                <Image
                  src={brand.brand_logo}
                  alt="logo"
                  height={40}
                  width={40}
                />
              )}
              <h3 className="hidden md:block text-[13px] font-medium">
                {brand.brand_name}
              </h3>
              {index !== brands.length - 1 && (
                <div className="border-l h-4 ml-10" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Separator className="my-3" />
    </section>
  );
};
