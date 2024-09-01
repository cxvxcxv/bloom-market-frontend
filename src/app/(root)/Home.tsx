'use client';

import { useQuery } from '@tanstack/react-query';

import { Card } from '@/components/card/Card';
import Loader from '@/components/ui/Loader';

import { IProduct } from '@/types/product.types';

import { ProductService } from '@/services/product.service';

export function Home() {
  const { data, isPending, isError } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: () => ProductService.findAll(),
  });

  return (
    <section className="mx-4">
      {isPending && <Loader />}
      {isError && <p>error loading products</p>}

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {data?.map(product => <Card key={product.id} product={product} />)}
      </section>
    </section>
  );
}
