"use client";

import { Products } from "@/types";

interface ProductProps {
  products: Products[];
}

export const PopularCollections = ({
  products,
}: ProductProps) => {
  return <div>Popular Collections</div>;
};
