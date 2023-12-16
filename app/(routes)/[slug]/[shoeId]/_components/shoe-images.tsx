"use client";

import Image from "next/image";

import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

interface ShoeImages {
  images: ImageType[];
}

export const ShoeImages = ({ images }: ShoeImages) => {
  return (
    <div>
      <div className="bg-[#EBEBEB] p-5 sm:p-6 flex items-center justify-center">
        <Image
          src={images[0].image_path}
          alt="shoe images"
          height={500}
          width={500}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-2 mt-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              "bg-[#EBEBEB] p-3 h-24 w-full flex items-center justify-center"
            )}
          >
            <Image
              src={image.image_path}
              alt="shoe images"
              height={150}
              width={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
