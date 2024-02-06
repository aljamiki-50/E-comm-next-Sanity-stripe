import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function GetTypeProducgt(slug) {
  const query = `
  *[_type=="product" && category->name == "${slug}"]
  {
  
    _id,
    name,
      price,
      "imageUrl":images[0].asset->url,
      description,
      "slug":slug.current
  
  
    
  }
    
    `;
  const data = await client.fetch(query);

  return data;
}
//  every click will be hitting will be counted as a revalidation
export const dynamic = 'force-dynamic'


const page = async (params) => {
  const typeProduct = await GetTypeProducgt(params.params.category);

  return (
    <div className=" bg-slate-50 ">
      <div
        className="mx-auto  max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8 
      "
      >
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl font-bold  tracking-tight text-gray-900">
            Our Product for {params.params.category}
          </h2>
          {/* See All{" "} */}
          {/* <span>
            <ArrowRight />
          </span> */}
        </div>
        <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {typeProduct?.map((product, idx) => (
            <div className=" group relative" key={product._id}>
              <div
                className="    aspect-video w-full overflow-hidden rounded-lg  group-hover:opacity-80  lg:h-80 bg-gray-100
                    "
              >
                {/* in this source pice if you see we add the image directly to the source cause we refered to id inside our query Ì */}
                <Image
                  src={urlForImage(product.imageUrl)}
                  alt="Great Phone"
                  className="  object-fit  object-center"
                  priority
                  //   layout="fill"
                  objectFit="fit"
                  width={300}
                  height={300}
                />
              </div>
              <div className=" flex justify-between mt-4">
                <div className="">
                  <h3 className=" text-md font-bold font-sans  text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className=" text-sm mt-1  font-sans  text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className=" text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
