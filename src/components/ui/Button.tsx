import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Magnetic } from './Magnetic';
import styles from './Button.module.css';

type ButtonVariant = 'solid-ink' | 'solid-white' | 'outline-white' | 'outline-ink';

const variantClass: Record<ButtonVariant, string> = {
  'solid-ink': styles.solidInk ?? '',
  'solid-white': styles.solidWhite ?? '',
  'outline-white': styles.outlineWhite ?? '',
  'outline-ink': styles.outlineInk ?? '',
};

interface BaseProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  magnetic?: boolean;
  children: ReactNode;
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface NativeButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'solid-ink', fullWidth, magnetic = false, children, icon } = props;
  const className = `${styles.btn} ${variantClass[variant]} ${fullWidth ? styles.fullWidth : ''}`;

  let element: ReactNode;

  if ('href' in props && props.href) {
    element = (
      <Link href={props.href} className={className}>
        {icon}
        {children}
      </Link>
    );
  } else {
    const {
      href: _href,
      variant: _variant,
      fullWidth: _fw,
      magnetic: _m,
      children: _c,
      icon: _i,
      ...rest
    } = props as NativeButtonProps;

    element = (
      <button className={className} {...rest}>
        {icon}
        {children}
      </button>
    );
  }

  return magnetic ? <Magnetic strength={0.28}>{element}</Magnetic> : element;
}
