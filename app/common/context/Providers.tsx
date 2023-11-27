'use client';

import React, { FC, ReactNode } from 'react';

import { CartProvider as USCProvider } from 'use-shopping-cart';

import { Toaster } from '@/components/ui/toaster';

interface IProps {
  children: ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://localhost:3000/stripe/success"
      cancelUrl="https://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}

      <Toaster />
    </USCProvider>
  );
};
