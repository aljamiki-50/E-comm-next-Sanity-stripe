import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Getting our data from saniy io by querying it below -  usuing this method to avoid using client site

async function getHeroPic() {
  //  we took the first array cause it just array of one object so it eases things out while mapping later through
  const query = `
  *[_type=="heroImages"][0]

  `;
  const data = await client.fetch(query);

  return data;
}

// and our revalidte to make sure fetching happening every time withing 60 sec
export const revalidate = 60;

// console.log("hey how you din");

const HeroPage = async () => {
  // always we have to use async and await here other wise the promise and data fetching will quite a pickle
  const images = await getHeroPic();
  // console.log("here you images ", images.image1.asset._ref);
  return (
    <section className=" mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className=" mb-8 flex flex-wrap justify-between  md:mb-16">
        <div className=" mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 ">
          <h1 className=" mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion For Top Price!
          </h1>
          <p className=" line-clamp-4  max-w-screen-md leading-relaxed text-gray-500   xl:text-lg">
            🌟 Welcome to the ultimate shopping experience! 🛍️ At "Exclusivo
            Emporium," we take pride in offering the 𝗢𝗡𝗟𝗬 and the 𝗠𝗢𝗦𝗧 𝗘𝗫𝗖𝗟𝗨𝗦𝗜𝗩𝗘
            for you! 💎✨ Why shop with us? 🤔 Because we're not just a store –
            we're your go-to destination for unparalleled luxury and
            exclusivity. 🌐💼 🌈 Explore a curated collection of unique products
            that you won't find anywhere else. From fashion to home decor, we've
            handpicked the finest items just for you! 🕶️👜 💫 Step into a world
            where elegance meets innovation, and where you're not just a
            customer – you're part of an elite community that appreciates the
            finer things in life. 🌍🤝 Ready to elevate your lifestyle? 🚀 Join
            us at "Exclusivo Emporium" – because you deserve nothing but the
            best! 🌟🛒 #ShopExclusivo #ElevateYourStyle{" "}
          </p>
        </div>
        {/* creating the leading hero imagages here  .... */}
        <div className=" mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className=" relative left-1/2 top-12 z-10 -ml-12 overflow-hidden   rounded-lg bg-slate-50 shadow-lg  md:left-16 md:top-16 lg:ml-0">
            {/* The new update of next and sanity requires such a pattren for those file here  */}

            <Image
              src={urlForImage(images.image1)}
              alt="Great Phone"
              className="  object-cover  object-center"
              priority
              objectFit="fit"
              width={500}
              height={500}
            />
          </div>
          <div className=" rounded  overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src={urlForImage(images.image2)}
              alt="2nd  pic"
              className="  object-cover  object-center"
              priority
              objectFit="fit"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" flex flex-col items-center gap-8  justify-between md:flex-row">
        <div className=" flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href={"/Men"}
            className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-50 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href={"/Women"}
            className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href={"/Teens"}
            className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
