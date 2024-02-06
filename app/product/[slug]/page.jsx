import AddToBag from "@/components/AddToBag/AddToBag";
import CheckOutNow from "@/components/CheckOutNow/CheckOutNow";
import ImagesGallery from "@/components/ImagesGallery/ImagesGallery";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import product from "@/sanity/schemas/product";
import { data } from "autoprefixer";
import { Star, Truck } from "lucide-react";

async function GetCertainProduct(slug) {
  const query = `
    *[_type=="product" && slug.current == "${slug}"][0]{
        images,
        price,
        description,
        name,
      "slug":slug.current,
        "categoryName":category->name,
        price_id,
      }
      
    `;
  const data = await client.fetch(query);
  return data;
}
export const revalidate = 60;

const ProudctPage = async ({ params }) => {
  // const Product = await GetCertainProduct(params.slug);
  const Product = await GetCertainProduct(params.slug);

  console.log(product);

  //   console.log("certian one");

  return (
    <div className="  bg-white">
      <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
        <div className=" grid gap-8 md:grid-cols-2">
          <ImagesGallery images={Product.images} />
          <div className="md:py-8">
            <div className="  md:mb-3 mb-2">
              <span className=" mb-0.5  inline-block text-gray-500">
                {Product.categoryName}
              </span>
              <h2 className=" text-2xl font-bold text-gray-800 lg:text-3xl">
                {Product.name}
              </h2>
            </div>
            <div className=" mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className=" text-sm">4.2</span>
                <Star className=" h-5 w-5" />
              </Button>
              <span className=" text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className=" mb-4">
              <div className=" flex items-end  gap-2">
                <span className="  text-xl font-bold text-gray-800 md:text-2xl">
                  ${Product.price}
                </span>
                <span className="   mb-0.5 text-red-500   line-through">
                  ${Product.price}
                </span>
              </div>
              <span className=" text-sm text-gray-500">
                Incl Vats Plus Shipping{" "}
              </span>
            </div>
            <div className=" mb-6 flex items-center gap-2 text-gray-500">
              <Truck className=" w-6 h-6" />
              <span className=" text-sm"> 2-4 days shipping</span>
            </div>
            <div className=" flex gap-2.5">
              <AddToBag
                currency={"USD"}
                image={Product.images[0]}
                description={Product.description}
                name={Product.name}
                price={Product.price}
                key={Product._id}
                price_id={Product.price_id}
              />
              <CheckOutNow
                currency={"USD"}
                image={Product.images[0]}
                description={Product.description}
                name={Product.name}
                price={Product.price}
                key={Product._id}
                price_id={Product.price_id}
                className="bg-yellow-100"
                variant={"secondary"}
              />

              {/* <Button variant={"secondary"}>Check out now</Button> */}
            </div>
            <p className=" mt-5 text-base text-gray-500 tracking-wide line-clamp-6">
              {Product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudctPage;
