import clsx from 'clsx';
import Link from 'next/link';

import type { IMenuItem } from './menu.interface';

export function MenuItem({
  item,
  isActive,
}: {
  item: IMenuItem;
  isActive: boolean;
}) {
  return (
    <Link
      href={item.link}
      className={clsx(
        'flex gap-2 md:gap-4 md:mb-2 p-2 rounded-md hover:bg-gray-100/5 hover:text-primary transition-colors',
        { 'text-primary': isActive },
      )}
    >
      <item.icon />
      <p>{item.name}</p>
    </Link>
  );
}

// flex gap-2 md:gap-4 md:mb-2 p-2 rounded-md hover:bg-gray-100/5 hover:text-primary transition-colors
