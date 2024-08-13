import { ReactNode } from 'react';

import { Sidebar } from '@/components/sidebar/Sidebar';

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Sidebar />
      <div className="ml-[15%]">{children}</div>
    </div>
  );
}
