'use client';

import { FC, memo } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';

export interface IProps {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

const AddToCartButtonBase: FC<IProps> = ({
  currency,
  description,
  image,
  name,
  price,
}) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const handleAddProduct = () => {
    const product = {
      name,
      description,
      price,
      currency,
      image,
      sku: '', // !TODO:
    };

    addItem(product), handleCartClick();
  };

  return <Button onClick={handleAddProduct}>Add To Cart</Button>;
};

export const AddToCartButton = memo(AddToCartButtonBase);
