import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <h1 className="text-3xl font-medium">{children}</h1>;
}
