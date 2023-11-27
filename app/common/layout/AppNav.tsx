'use client';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { IRoute } from '@/app/common/types/routes';

interface IProps {
  routes: IRoute[];
}

export const AppNav: FC<IProps> = ({ routes }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="gap-6 lg:flex 2xl:ml-16">
        {routes.map(({ id, name, path, active }) => {
          const linkStyling =
            pathname === path
              ? 'text-lg font-semibold text-primary'
              : 'text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary';

          if (!active) return null;

          return (
            <li key={id}>
              <Link className={linkStyling} href={path}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
