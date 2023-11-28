'use client';

import React, { FC, memo } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';
import { IProduct } from '@/app/common/api/store';

export interface IProps {
  currency: string;
  product: IProduct;
}

const CheckoutButtonBase: FC<IProps> = ({ product }) => {
  const { checkoutSingleItem } = useShoppingCart();

  const handleClick = () => checkoutSingleItem(`${product.id}`);

  return (
    <Button variant="outline" onClick={handleClick}>
      Checkout Now
    </Button>
  );
};

export const CheckoutButton = memo(CheckoutButtonBase);
