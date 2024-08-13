'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { LogoutButton } from './LogoutButton';
import { MenuItem } from './MenuItem';
import { MENU } from './menu.data';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 flex min-h-screen w-[15%] flex-col items-center justify-center p-2 shadow-xl md:items-start dark:bg-gray-500',
      )}
    >
      <nav className="w-full grow">
        {MENU.map(item => (
          <MenuItem
            item={item}
            isActive={pathname === item.link}
            key={item.name}
          />
        ))}
      </nav>

      <LogoutButton extra="px-4" />
    </aside>
  );
}
