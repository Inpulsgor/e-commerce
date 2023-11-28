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
import { Pagination } from '@/app/common/components/Pagination';

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

      <Pagination />
    </section>
  );
};
