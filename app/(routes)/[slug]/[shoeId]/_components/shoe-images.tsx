"use client";

import Image from "next/image";

import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ShoeImages {
  images: ImageType[];
}

export const ShoeImages = ({ images }: ShoeImages) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-12">
      <div className="grid grid-cols-4 md:grid-cols-1 items-center gap-2 mt-2.5 md:mt-0">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              "bg-[#EBEBEB] p-3 h-24 md:h-32 md:w-32 w-full flex items-center justify-center transition duration-300",
              selectedImage === index && "ring-1 ring-black"
            )}
            onClick={() => setSelectedImage(index)}
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
      <div className="bg-[#EBEBEB] w-full p-5 sm:p-6 flex items-center justify-center">
        <Image
          src={images[selectedImage].image_path}
          alt="shoe images"
          height={500}
          width={500}
          className="p-10"
        />
      </div>
    </div>
  );
};
