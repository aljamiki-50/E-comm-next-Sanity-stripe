"use client";
import React from "react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlForImage } from "@/sanity/lib/image";

// we creating a component that would be a button hooding the buyer  product info and by clicking it it  send detalis to our shop direct where the check out would be conducted
//  and they have to be passed from page there

const AddToBag = ({ currency, image, description, name, price, price_id }) => {
  const { addItem, handleCartClick } = useShoppingCart();

  // so lets  create an object called product and save everything inside and passed them and we can access it inside the shopping Cart model we  created through the cart details
  const product = {
    name: name,
    currency: currency,
    description: description,
    price: price,
    image: urlForImage(image),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to Bag her
    </Button>
  );
};

export default AddToBag;
