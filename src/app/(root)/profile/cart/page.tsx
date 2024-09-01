import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import { Cart } from './Cart';

export const metadata: Metadata = {
  title: 'cart',
  ...NO_INDEX_PAGE,
};

export default function CartPage() {
  return <Cart />;
}
