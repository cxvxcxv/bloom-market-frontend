'use client';

import { Card } from '@/components/card/Card';

import { IProduct } from '@/types/product.types';

import { useCart } from '@/hooks/useCart';

export function Cart() {
  const { data } = useCart();
  console.log(data);

  return (
    <section>
      {data?.map((product: IProduct) => <Card product={product} />)}
    </section>
  );
}
