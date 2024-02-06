"use client"

import React from "react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlForImage } from "@/sanity/lib/image";

const CheckOutNow = ({
  currency,
  image,
  description,
  name,
  price,
  price_id,
}) => {
  const { checkoutSingleItem } = useShoppingCart();

  const product = {
    name: name,
    currency: currency,
    description: description,
    price: price,
    image: urlForImage(image),
    price_id: price_id,
  };

  function buyNow(priceID) {
    try {
      checkoutSingleItem(priceID);
    } catch (error) {
      console.error("Error during checkout:", error);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  }

  return (
    <Button
      variant={"outline"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      CheckOutNow
    </Button>
  );
};

export default CheckOutNow;
