import React, { FC } from 'react';
import Image from 'next/image';

import { IProduct } from '@/app/common/api/store';

export const PRODUCT_NEWS = {
  man: 'https://images.unsplash.com/photo-1577375688665-ce3600b36b64?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  woman:
    'https://images.unsplash.com/photo-1611747581894-45e5f11c7be6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

interface IProps {
  products: IProduct[];
}

export const ProductNews: FC<IProps> = () => (
  <section className="mx-auto max-w-2xl px-4 pt-8 mb-8 lg:max-w-7xl lg:px-8 md:mb-16">
    <div className="flex flex-wrap justify-between">
      <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
          Top Sellers
        </h1>
        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
          We sell only the most exclusive and high quality products for you. We
          are the best so come and shop with us.
        </p>
      </div>

      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <Image
            src={PRODUCT_NEWS.man}
            alt="Man Photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
          />
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <Image
            src={PRODUCT_NEWS.woman}
            alt="Woman Photo"
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  </section>
);
