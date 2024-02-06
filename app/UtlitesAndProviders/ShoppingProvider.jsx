"use client";
import { CartProvider } from "use-shopping-cart";
import React, { Children } from "react";

// so we adding a provider as a shopping cart here  and as you see it  s a self explaintory
// only thing need to be focused on is the should presist which true to carry with the session around
// still can check the documentaion for the subscribtion mode

const ShoppingProvider = ({ children }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/erorr"
      currency="usd"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default ShoppingProvider;
