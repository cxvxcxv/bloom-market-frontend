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
        'linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium transition hover:bg-primary active:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
