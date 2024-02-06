"use client";

import { urlForImage } from "@/sanity/lib/image";
import { LucideSparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ImagesGallery = ({ images }) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleBigImage = function (image) {
    setBigImage(image);
  };
  return (
    <div className=" grid grid-cols-4 gap-4 lg:grid-cols-5">
      <div className=" order-last flex gap-4 lg:order-none lg:flex-col">
        {images?.map((image, idex) => (
          <div key={idex} className=" overflow-hidden rounded-lg bg-green-100">
            <Image
              onClick={() => handleBigImage(image)}
              src={urlForImage(image)}
              width={300}
              height={500}
              className="  object-cover  object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className=" relative overflow-hidden transition duration-100 rounded-lg bg-green-100 lg:col-span-4">
        <Image
          src={urlForImage(bigImage)}
          alt="The here image "
          width={500}
          height={500}
          className=""
        />
        <span className=" absolute left-0 top-0  rounded-br-lg   bg-red-500 px-3 py-1.5        text-sm uppercase tracking-wider text-white">
            {"sale"}
            {/* <LucideSparkles/> */}
        </span>
      </div>
    </div>
  );
};

export default ImagesGallery;
