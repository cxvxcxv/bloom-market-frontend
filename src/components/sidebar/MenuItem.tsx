import Link from 'next/link';

import type { IMenuItem } from './menu.interface';

export function MenuItem({ item }: { item: IMenuItem }) {
  return (
    <div>
      <Link href={item.link}>
        <item.icon />
        <p>{item.name}</p>
      </Link>
    </div>
  );
}
