import cn from 'clsx';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  ...rest
}: PropsWithChildren<TButton>) {
  return (
    <button
      className={cn(
        'linear active:bg-brand-700 rounded-lg border border-primary bg-transparent px-7 py-2 text-base font-medium transition hover:bg-primary disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
