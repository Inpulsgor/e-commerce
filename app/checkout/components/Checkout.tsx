'use client';

import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from '@/components/ui/use-toast';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { PATH } from '@/app/common/types/routes';

export const Checkout: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, clearCart } = useShoppingCart();

  const { toast } = useToast();

  const { push } = useRouter();

  const handlePay = () => {
    setIsLoading(prev => !prev);

    clearCart();

    setTimeout(() => {
      toast({
        title: 'Payment Successful',
        description:
          'We are delighted to inform you that we received your payments',
      });

      push(PATH.HOME);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
        <div className="mt-8">
          <Input
            className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            placeholder="Email"
          />
        </div>

        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
          Card details
        </label>

        <div className="mt-2 flex-col">
          <Input
            className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            placeholder="0000 1234 6549 15151"
          />

          <div className="flex-row flex">
            <Input
              className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="text"
              placeholder="MM/YY"
            />

            <Input
              className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="text"
              placeholder="CVC"
            />
          </div>
        </div>

        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
          Name on card
        </label>

        <div className="mt-2 flex-col">
          <Input
            className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            placeholder="Name on card"
          />
        </div>

        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
          Country or region
        </label>

        <div className="mt-2 flex-col">
          <div className="relative">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {['US', 'UK'].map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Input
            className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            placeholder="ZIP"
          />
        </div>

        <Button
          className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
          onClick={handlePay}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="w-4 h-4 rounded-full animate-spin border border-solid border-white-500 border-t-transparent"></div>
          ) : (
            <span className="text-base leading-4">
              Pay {totalPrice?.toFixed(2) ?? 0}$
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};
