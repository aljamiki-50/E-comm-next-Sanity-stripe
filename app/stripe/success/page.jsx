import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" h-screen">
      <div className=" mt-32 md:w-[50vw] mx-auto">
        <CheckCheck className=" text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="  flex flex-col gap-y-3 text-center">
          <h3 className=" md:text-2xl text-base text-gray-900 font-semibold text-center">
            {" "}
            PAYMENT DONE !!
          </h3>{" "}
          <p className=" text-gray-600 my-2 ">
            Thanks For your Purchase I hope you Enjoy it{" "}
          </p>
          <p>Have a great a day </p>
          <Button asChild className=" mt-5 w-1/2  mx-auto">
            <Link href="/">GO Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
