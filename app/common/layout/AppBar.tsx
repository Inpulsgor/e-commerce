'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { ShoppingBag } from 'lucide-react';

import { AppNav } from '@/app/common/layout/AppNav';
import { ROUTES, PATH } from '@/app/common/types/routes';
import { Button } from '@/components/ui/button';

export const AppBar: FC = () => {
  const { handleCartClick } = useShoppingCart();

  const isNavbarActive = ROUTES.some(({ active }) => !!active);

  const onCardClick = () => handleCartClick();

  return (
    <header className="border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-7xl">
        <Link className="text-3xl font-bold" href={PATH.HOME}>
          <span className="text-primary">e</span>Shopping
        </Link>

        {isNavbarActive && <AppNav routes={ROUTES} />}

        <div className="flex">
          <Button className="flex" variant="outline" onClick={onCardClick}>
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </header>
  );
};
