"use client";

import { formatter } from "@/lib/utils";
import { Products } from "@/types";

interface ShoeDetailsProps {
  data: Products;
}

export const ShoeDetails = ({ data }: ShoeDetailsProps) => {
  return (
    <div>
      <div className="space-y-1.5">
        <h1 className="md:text-2xl font-bold">
          {data.name}
        </h1>
        <h2 className="text-[13px]">
          {data.gender}'s Shoe
        </h2>
        <h3 className="text-lg font-[600]">
          {formatter.format(data.price)}
        </h3>
      </div>
      <div className="mt-5">
        <p className="text-muted-foreground text-[13px] leading-6">
          {data.description}
        </p>
      </div>
    </div>
  );
};
