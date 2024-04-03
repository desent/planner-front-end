import cn from 'clsx';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonType>) {
  return (
    <button className={cn('linear', className)} {...rest}>
      {children}
    </button>
  );
}
