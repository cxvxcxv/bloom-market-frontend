'use client';

import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { ICartItem } from '@/types/cart-item.types';
import { IProduct } from '@/types/product.types';

import { useCart } from '@/hooks/useCart';

import { Button } from '../ui/buttons/Button';

import { CartService } from '@/services/cart.service';

type TCardProps = {
  product: IProduct;
};

export function Card({ product }: TCardProps) {
  const { data } = useCart();
  const isInCart = data?.some(
    (item: ICartItem) => item.productId === product.id,
  );
  console.log(data, isInCart);

  const { mutate, isPending } = useMutation({
    mutationKey: ['addToCart'],
    mutationFn: (productId: string) => CartService.addItem(productId),
    onSuccess() {
      toast.success('added to cart');
    },
  });

  const handleAddItemToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    productId: string,
  ) => {
    e.preventDefault();
    mutate(productId);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col rounded-md p-6 shadow dark:bg-gray-500"
    >
      <span className="relative">
        <Image
          src={product.images[0]}
          alt=""
          width={0}
          height={0}
          className="mb-4 h-full w-full rounded-md"
        />
        <button
          onClick={e => handleAddItemToCart(e, product.id)}
          className="absolute right-2 top-4"
          title={isInCart ? 'in cart' : 'add to cart'}
        >
          <ShoppingCart className={clsx('', { 'text-primary': isInCart })} />
        </button>
      </span>
      <p className="text-ellipsis font-bold">{product.name}</p>
      <p className="text-ellipsis">{product.description}</p>
      <Button className="mt-4">Buy</Button>
    </Link>
  );
}
