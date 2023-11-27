import React, { FC } from 'react';

import Image from 'next/image';

interface IProps {
  imageUrl: string;
}

export const ProductPreview: FC<IProps> = ({ imageUrl }) => (
  <div className="grid gap-4 lg:grid-cols-5">
    <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
      <Image
        src={imageUrl}
        alt="Product image"
        width={500}
        height={500}
        className="h-full w-full object-cover object-center"
        priority
      />

      <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
        Sale
      </span>
    </div>
  </div>
);
