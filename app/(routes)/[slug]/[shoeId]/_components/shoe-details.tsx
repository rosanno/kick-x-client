"use client";

import { useState } from "react";

import { cn, formatter } from "@/lib/utils";
import { Products } from "@/types";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ShoeDetailsProps {
  data: Products;
}

export const ShoeDetails = ({ data }: ShoeDetailsProps) => {
  const [selectedSize, setSelectedSize] =
    useState<number>();

  const calculateDiscountedPrice = () => {
    const discountAmount =
      (data.price * data.discount) / 100;
    const discountedPrice = data.price - discountAmount;
    return discountedPrice;
  };

  return (
    <div>
      <div className="space-y-1.5">
        <h1 className="text-lg md:text-2xl font-bold">
          {data.name}
        </h1>
        <h2 className="text-[13px]">
          {data.gender}'s Shoe
        </h2>
        <h3 className="text-lg font-[600]">
          {data.discount !== 0 &&
            formatter.format(calculateDiscountedPrice())}
        </h3>
        <div className="flex items-center gap-1">
          <h3
            className={cn(
              "text-lg font-[600]",
              data.discount !== 0 &&
                "text-muted-foreground text-[13px] line-through"
            )}
          >
            {formatter.format(data.price)}
          </h3>{" "}
          {data.discount !== 0 && (
            <span className="text-[13px] text-gray-500">
              -{data.discount * 100}%
            </span>
          )}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-muted-foreground text-[13px] leading-6">
          {data.description}
        </p>
      </div>
      <div className="mt-5">
        <h4 className="text-sm font-semibold">
          Select Size
        </h4>
        <div className="flex items-center flex-wrap gap-2.5 mt-3">
          {data.sizes.map((size, index) => (
            <button
              key={size.id}
              disabled={size.quantity === 0}
              className={cn(
                "bg-[#F3F3F5] h-10 w-10 rounded-xl flex items-center justify-center hover:bg-[#313131] hover:text-[#F3F3F5] transition duration-300",
                selectedSize === index &&
                  "bg-[#313131] text-[#F3F3F5]",
                size.quantity > 0
                  ? "bg-gray-100/75"
                  : "bg-gray-100/80 opacity-40"
              )}
              onClick={() => setSelectedSize(index)}
            >
              <span className="text-[13px] font-medium">
                {size.size}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 mt-5">
        <div className="flex-1">
          <div
            role="button"
            className="
              bg-[#313131]
              hover:bg-opacity-60
              transition
              duration-300
              rounded-3xl 
              text-white 
              text-sm 
              text-center 
              font-medium 
              uppercase 
              p-3
            "
          >
            Add to cart
          </div>
        </div>
        <div>
          <Button
            variant="ghost"
            size={"icon"}
            className="bg-gray-100 bg-opacity-75 rounded-full p-2"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="space-y-1.5 mt-8">
        <h4 className="text-sm font-semibold">Shipping</h4>
        <p className="text-muted-foreground text-xs">
          To get shipping information{" "}
          <span className="text-slate-900 font-semibold underline">
            Edit Location
          </span>
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">
            Free Pickup
          </h4>
          <div
            role="button"
            className="text-xs text-[#313131] font-semibold underline"
          >
            Find a Shop
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-5">
          Find your perfect pair of different kind of shoes
          on our app. From running to casual wear, we have a
          wide selection of comfortable.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        <h4 className="text-sm font-semibold">
          Free Shipping & Returns
        </h4>
        <p className="text-muted-foreground text-xs">
          Free standard shipping and free 60-day return.
          <span className="text-black font-semibold underline">
            Learn more. Return policy exclusions apply.
          </span>
        </p>
      </div>
      <Separator className="my-4" />
      <div></div>
    </div>
  );
};
