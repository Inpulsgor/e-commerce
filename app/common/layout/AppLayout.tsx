import React, { FC, ReactNode } from 'react';

import { Providers } from '@/app/common/context/Providers';
import { AppBar } from '@/app/common/layout/AppBar';
import { AppBasement } from '@/app/common/layout/AppBasement';
import { ShoppingCart } from '@/app/common/components/ShoppingCart';

interface IProps {
  children: ReactNode;
}

export const AppLayout: FC<IProps> = ({ children }) => (
  <Providers>
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <AppBar />

      <main className="h-full">{children}</main>

      {/* <AppBasement /> */}
      <ShoppingCart />
    </div>
  </Providers>
);
