import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <div>
      <h1 className="text-3xl font-medium">{children}</h1>
      <div className="my-3 h-0.5 bg-border w-full" />
    </div>
  );
}
