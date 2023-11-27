'use client';

import React, { FC, memo } from 'react';

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';

export interface IProps {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

const CheckoutButtonBase: FC<IProps> = ({
  currency,
  description,
  image,
  name,
  price,
}) => {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceId: string) => checkoutSingleItem(priceId);

  const product = {
    name,
    description,
    price,
    currency,
    image,
  };

  return (
    <Button variant="outline" onClick={() => buyNow('')}>
      Checkout Now
    </Button>
  );
};

export const CheckoutButton = memo(CheckoutButtonBase);
