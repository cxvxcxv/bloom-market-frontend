import { Heart, Package, ShoppingCart, Store, User } from 'lucide-react';

import { DASHBOARD_PAGES } from '@/config/urls.config';

import type { IMenuItem } from './menu.interface';

export const MENU: IMenuItem[] = [
  {
    name: 'Profile',
    link: DASHBOARD_PAGES.HOME,
    icon: User,
  },
  {
    name: 'Store',
    link: '/',
    icon: Store,
  },
  {
    name: 'Cart',
    link: DASHBOARD_PAGES.CART,
    icon: ShoppingCart,
  },
  {
    name: 'Favorites',
    link: DASHBOARD_PAGES.FAVORITES,
    icon: Heart,
  },
  {
    name: 'Orders',
    link: DASHBOARD_PAGES.ORDERS,
    icon: Package,
  },
];
