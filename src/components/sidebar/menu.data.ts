import { LayoutDashboard } from 'lucide-react';

import { DASHBOARD_PAGES } from '@/config/urls.config';

import type { IMenuItem } from './menu.interface';

export const MENU: IMenuItem[] = [
  {
    name: 'profile',
    link: DASHBOARD_PAGES.HOME,
    icon: LayoutDashboard,
  },
  {
    name: 'home',
    link: '/',
    icon: LayoutDashboard,
  },
];
