import React, { FC, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProduct } from '@/app/common/api/store';
import { PATH } from '@/app/common/types/routes';

interface IProps {
  product: IProduct;
}

const ProductBase: FC<IProps> = ({ product }) => {
  const { image, title, price = 0, id, category } = product;

  return (
    <div className="rounded-lg shadow-lg bg-white flex flex-col justify-between items-center">
      <Link href={`${PATH.PRODUCT}/${id}`} className="block h-64">
        <Image
          src={image}
          alt="Product"
          className="object-contain rounded-t-xl h-full"
          width={224}
          height={256}
        />
      </Link>

      <div className="flex flex-col mt-3 px-4 pb-4 w-full">
        <p className="text-sm font-medium">{title}</p>

        <div className="flex justify-between pt-2">
          <div className="flex items-center">
            <span className="text-xs font-medium text-gray-600">category:</span>
            <span className="text-xs font-medium ml-1 text-indigo-500">
              {category}
            </span>
          </div>

          <span className="flex items-center h-8 bg-primary text-white text-sm px-2 rounded">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProductItem = memo(ProductBase);
