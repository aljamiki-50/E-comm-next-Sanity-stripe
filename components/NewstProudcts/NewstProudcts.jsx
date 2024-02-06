import { client } from "@/sanity/lib/client";
import { ArrowRight, ArrowUpWideNarrow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function GetData() {
  // in this query here the array of 0 to 4 denote to we need to fetch 4 items and
  // the Category->name/asset->url we refering to ref type here
  // and we used the cheatSheet to from sanity to approch the recent one  by time create at
  const query = `
  *[_type=="product"][0...4] | order(_createdAt desc){
    _id,
      name,
      price,
      description,
      "slug":slug.current,
      "categoryName":category->name,
   "images":images[0].asset->url
  
      
  }
    `;
  const data = await client.fetch(query);
  return data;
  console.log(data);
}
// and our revalidte to make sure fetching happening every time withing 60 sec
export const revalidate = 60;

const NewstProudcts = async () => {
  const RecentProducts = await GetData();
  //   console.log(RecentProducts);
  return (
    <div className=" bg-slate-100 ">
      <div
        className="mx-auto  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 
      "
      >
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl font-bold  tracking-tight text-gray-900">
            Our Newst Product
          </h2>
          <Link
            className=" text-primary  flex items-center gap-x-1"
            href={"/all"}
          >
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {RecentProducts?.map((product, idx) => (
            <div className=" group relative" key={product._id}>
              <div
                className="    aspect-video w-full overflow-hidden rounded-lg  group-hover:opacity-80  lg:h-80 bg-gray-300
                    "
              >
                {/* in this source pice if you see we add the image directly to the source cause we refered to id inside our query Ì */}
                <Image
                  src={product.images}
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
                <p
                className=" text-sm font-medium text-gray-900"
                >
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

export default NewstProudcts;
