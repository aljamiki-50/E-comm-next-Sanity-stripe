"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { Result } from "postcss";

const ShoppingCartModel = () => {
  // importing cart details
  const {
    cartDetails,
    totalPrice,
    cartCount,
    shouldDisplayCart,
    removeItem,
    handleCartClick,
    redirectToCheckout,
  } = useShoppingCart();

  // console.log(cartCount);

  //

  async function handleCartCheckout(e) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // basicly we saying the opening should be only if the should dipslay cart true
    // and hanle the cart click it s func for the open on change
    <Sheet onOpenChange={() => handleCartClick()} open={shouldDisplayCart}>
      {/* <SheetTrigger>Open</SheetTrigger> */}
      <SheetContent className=" sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping cart</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
        <div className=" h-full flex flex-col justify-between">
          <div className=" mt-8 flex-1  flex flex-col overflow-y-auto">
            <ul className=" -my-6 divide-y  divide-gray-200">
              {cartCount === 0 ? (
                <h1 className=" bg-red-500 p-6">you dont have any titems</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li
                      key={entry.id}
                      className=" flex py-6 overflow-hidden rounded-md border border-gray-200"
                    >
                      <div className=" h-24 w-24  flex-shrink-0 overflow-hidden rounded-md border border-gray-800">
                        <Image
                          src={entry.image}
                          alt="Product name"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className=" ml-4  flex-1 flex-col">
                        <div className="">
                          <div className=" flex justify-between text-base font-medium  text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className=" ml-4">${entry.price}</p>
                          </div>
                          <p className=" line-clamp-2 mt-1 text-sm  text-gray-500">
                            {entry.description}
                          </p>
                        </div>
                        <div className=" flex flex-1 mt-2 items-end justify-between text-sm">
                          <p className=" text-gray-500">QTY:{entry.quantity}</p>
                          <p className=" flex">
                            {" "}
                            <button
                              onClick={() => {
                                removeItem(entry.id);
                              }}
                              type="button"
                              className="  font-medium text-primary hover:text-primary/80 "
                            >
                              {"remover"}
                            </button>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className=" border-t border-gray-200  px-4 py-6 sm:px-6 ">
            <div className=" flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className=" mt-5 text-gray-500">
              shipping & and taxes included in the checkout{" "}
            </p>
            <div className=" mt-6">
              <Button onClick={handleCartCheckout} className="w-full">
                CheckOut
              </Button>
            </div>
            <div className="   mt-6 flex justify-center  text-center text-sm text-gray-500">
              <p>
                OR
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    handleCartClick();
                  }}
                  className=" mx-3 font-medium text-primary hover:text-primary/80 "
                >
                  Contine Shopping
                </Button>
              </p>{" "}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModel;
