import React from 'react';
import { Star, Truck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

import { ProductPreview } from '@/app/product/components/ProductPreview';
import { AddToCartButton } from '@/app/product/components/AddToCartButton';
import { CheckoutButton } from '@/app/product/components/CheckoutButton';
import { IProduct, getStoreProductById } from '@/app/common/api/store';

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getStoreProductById(params.slug);

  const { id, title, category, image, price, description, rating } =
    (data as IProduct) ?? {};

  const prevPrice = price ? (price + 30).toFixed(2) : 0;

  return (
    <div className="bg-white py-8 ">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 h-full justify-center items-center flex">
        <div className="grid gap-8 md:grid-cols-2">
          {!!image ? (
            <ProductPreview imageUrl={image} />
          ) : (
            <Skeleton className="h-12 w-12 rounded-full" />
          )}

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {title}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">{rating.rate}</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                {rating.count} Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${prevPrice}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            {data && (
              <div className="flex gap-2.5">
                <AddToCartButton currency="USD" product={data} />
                <CheckoutButton currency="USD" product={data} />
              </div>
            )}

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
