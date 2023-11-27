'use client';

import React, { FC } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { ProductItem } from '@/app/common/components/ProductItem';
import { IProduct, getProductCategories } from '@/app/common/api/store';

interface IProps {
  products: IProduct[];
}

export const ProductList: FC<IProps> = async ({ products }) => {
  const categories = await getProductCategories();

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
        <span className="text-sm font-semibold">
          1-20 of {products?.length} Products
        </span>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
        {products.map(product => (
          <ProductItem key={product?.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-1">
        <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400"
          disabled
        >
          Prev
        </button>
        <button
          className="flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600"
          disabled
        >
          1
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          2
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          3
        </button>
        <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          Next
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
