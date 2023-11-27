import React from 'react';

import { ProductNews } from '@/app/components/ProductNews';
import { ProductList } from '@/app/components/ProductList';

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <ProductNews />
      <ProductList />
    </main>
  );
}
