"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";

import { formatter } from "@/lib/utils";
import { Products } from "@/types";
import Link from "next/link";

interface ProductProps {
  products: Products[];
}

export const PopularCollections = ({
  products,
}: ProductProps) => {
  return (
    <section className="mt-16">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-2xl font-semibold">
            Popular Collections
          </h1>
          <Link
            href="/"
            className="
              uppercase 
              text-[13px] 
              font-bold
              underline
              mt-2
            "
          >
            Discover all
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-2 md:gap-6 items-center md:mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#F8F8FA] relative"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={product.images[0]?.image_path}
                  alt="Product Images"
                  height={290}
                  width={290}
                  className="h-72 w-72 object-contain"
                />
              </div>
              <div className="flex items-center justify-between p-5">
                <h2 className="text-base font-semibold">
                  {product.name}
                </h2>
                <h2 className="text-base font-semibold">
                  {formatter.format(product.price)}
                </h2>
              </div>
              <div
                role="button"
                className="
                  flex 
                  items-center 
                  gap-1.5 
                  bg-white 
                  py-2 
                  px-3 
                  rounded-full 
                  shadow-sm
                  hover:opacity-50
                  transition
                  duration-300 
                  absolute 
                  top-4 
                  right-4
                "
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="text-xs font-semibold">
                  Add to Card
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
