import { ReactNode } from 'react';

import { Sidebar } from '@/components/sidebar/Sidebar';

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
