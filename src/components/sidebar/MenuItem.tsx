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
      title={item.name}
      className={clsx(
        'mb-2 flex justify-center gap-4 rounded-md p-2 hover:bg-gray-100/5 hover:text-primary md:justify-start md:p-4',
        { 'font-semibold text-primary': isActive },
      )}
    >
      <item.icon className="aspect-square min-h-6 min-w-6 md:h-auto md:w-auto" />
      <p className="hidden md:block">{item.name}</p>
    </Link>
  );
}
