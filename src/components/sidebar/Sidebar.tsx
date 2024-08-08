'use client';

import { usePathname } from 'next/navigation';

import { LogoutButton } from './LogoutButton';
import { MenuItem } from './MenuItem';
import { MENU } from './menu.data';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen shadow-xl w-sidebar p-1 md:p-2 lg:p-4">
      <div className="grow">
        {MENU.map(item => (
          <MenuItem
            item={item}
            key={item.link}
            isActive={pathname === item.link}
          />
        ))}
      </div>
      <LogoutButton />
    </div>
  );
}
