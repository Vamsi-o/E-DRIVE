'use client';

import { motion } from 'framer-motion';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  primary:
    'bg-tiffany text-black hover:bg-[#6bc9b2] hover:shadow-[0_8px_30px_var(--color-tiffany-glow)]',
  dark:
    'bg-black text-white hover:bg-[var(--color-dark-card)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/5',
  outline:
    'bg-transparent text-white border-[1.5px] border-white/30 hover:border-white hover:bg-white/5',
  ghost:
    'bg-transparent text-white group-hover:text-tiffany !px-0 !py-2 border-b border-transparent hover:border-tiffany rounded-none',
};

const sizeStyles = {
  sm: 'px-5 py-2.5 text-[0.7rem]',
  md: 'px-8 py-4 text-[0.85rem]',
  lg: 'px-10 py-5 text-[0.95rem]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-3 font-bold tracking-[0.1em] uppercase transition-all duration-400 ease-out-expo rounded-[10px] overflow-hidden group';
  
  const ghostClasses = variant === 'ghost' 
    ? 'relative inline-flex items-center gap-4 text-white text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 hover:text-tiffany group'
    : '';

  const classes = variant === 'ghost' 
    ? `${ghostClasses} ${className}`
    : `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      
      {variant === 'ghost' ? (
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tiffany transition-all duration-500 group-hover:w-full" />
        </span>
      ) : (
        <span className="relative z-10">{children}</span>
      )}

      {icon && iconPosition === 'right' && (
        <span className={`transition-transform duration-300 ${variant === 'ghost' ? 'group-hover:translate-x-2' : 'group-hover:translate-x-1'}`}>
          {icon}
        </span>
      )}
    </>
  );

  if (props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...(rest as any)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
