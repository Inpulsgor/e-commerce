'use client';

import React, { FC, memo } from 'react';

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { IProduct } from '@/app/common/api/store';

export interface IProps {
  currency: string;
  product: IProduct;
}

const CheckoutButtonBase: FC<IProps> = ({ product }) => {
  const { checkoutSingleItem } = useShoppingCart();

  return (
    <Button
      variant="outline"
      onClick={() => checkoutSingleItem(product.price_id)}
    >
      Checkout Now
    </Button>
  );
};

export const CheckoutButton = memo(CheckoutButtonBase);
