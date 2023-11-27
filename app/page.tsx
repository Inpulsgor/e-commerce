import React from 'react';

import { ProductNews } from '@/app/common/components/ProductNews';
import { ProductList } from '@/app/common/components/ProductList';

import { getStoreProducts } from '@/app/common/api/store';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const data = await getStoreProducts();

  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <ProductNews products={data} />
      <ProductList products={data} />
    </main>
  );
}
