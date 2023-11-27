import React, { FC, ReactNode } from 'react';

import { AppBar } from '@/app/layout/AppBar';
import { AppBasement } from '@/app/layout/AppBasement';
import { Providers } from '@/common/context/Providers';

interface IProps {
  children: ReactNode;
}

export const AppLayout: FC<IProps> = ({ children }) => (
  <Providers>
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <AppBar />

      {children}

      <AppBasement />
    </div>
  </Providers>
);
