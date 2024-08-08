import { ReactNode } from 'react';

import { Sidebar } from '@/components/sidebar/Sidebar';

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between items-start">
      <Sidebar />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
