'use client';

import { FC, memo } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';
import { IProduct } from '@/app/common/api/store';

export interface IProps {
  currency: string;
  product: IProduct;
}

const AddToCartButtonBase: FC<IProps> = ({ currency, product }) => {
  const { addItem, cartDetails, incrementItem, handleCartClick } =
    useShoppingCart();

  const { title, description, price, image } = product ?? {};

  const handleAddProduct = () => {
    const cartProducts = Object.values(cartDetails ?? {}) ?? [];

    const productInCart = cartProducts.find(product => product?.name === title);

    const payload = {
      name: title,
      description,
      price,
      currency,
      image,
      sku: '',
    };

    !!productInCart ? incrementItem(productInCart.id) : addItem(payload);

    handleCartClick();
  };

  return <Button onClick={handleAddProduct}>Add To Cart</Button>;
};

export const AddToCartButton = memo(AddToCartButtonBase);
