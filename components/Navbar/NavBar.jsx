"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingBag, ShoppingBagIcon } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Teens",
    href: "/Teens",
  },
];

const NavBar = () => {
  // we calling the shopping cart and we extracting the closecart Func and passing it to t our cart ICon down
  const { handleCartClick, cartCount } = useShoppingCart();
  // console.log(cartCount.length);
  const pathname = usePathname();
  return (
    <header className=" mb-8 border-b">
      <div className=" flex items-center justify-between mx-auto max-w-2xl sm:px-6 px-4 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="  text-2xl md:text-4xl font-bold">
            Next <span className=" text-primary">Ecommerce</span>
          </h1>
        </Link>
        <nav className=" hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div className=" divide-x-8" key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className=" text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className=" text-lg font-semibold text-gray-700 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        {/* adding a shopping bag */}
        <div className=" flex divide-x border-r sm:border-l">
          {/* our button here been installed as well as with ui shadn cdn */}
          <Button
            //  the variant here comes from our button proeprties The we can refer to diffrenet color propery to be displayed
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex  flex-col gap-y-1.5  h-12  w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            {/* we adding an icon of shopping cart which it  s coming of lucide-react which been installed with ui shadn cdn  */}
            <ShoppingBagIcon />
            <span className=" hidden lg:gap-x-1 lg:flex  lg:items-center text-xs font-semibold text-gray-500 sm:block">
              Cart
              {cartCount > 0 && (
                <span className=" p-1 bg-red-100 rounded-full">
                  {cartCount}
                </span>
              )}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
