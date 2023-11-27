'use client';

import React, { FC, ReactNode } from 'react';

import { CartProvider } from 'use-shopping-cart';

interface IProps {
  children: ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://commerce-next-yt.vercel.app/stripe/success"
      cancelUrl="https://commerce-next-yt.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};
