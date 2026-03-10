'use client';

import { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  label: string;
  error?: string;
  helperText?: string;
  className?: string;
};

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  options?: never;
};

type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement> & {
  type: 'select';
  options: { label: string; value: string }[];
};

type FormFieldProps = InputProps | SelectProps;

export default function FormField(props: FormFieldProps) {
  const { label, error, helperText, className = '', ...restProps } = props;

  const baseInputClasses = `
    w-full bg-[var(--color-dark-surface)] border border-white/10 rounded-lg px-4 py-3.5 
    text-white text-sm transition-all duration-300
    placeholder:text-white/20 focus:outline-none focus:border-tiffany focus:bg-[var(--color-dark-card)]
    ${error ? 'border-red-500/50 focus:border-red-500' : ''}
  `;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-white/70 text-xs font-bold tracking-[0.1em] uppercase ml-1">
        {label}
        {restProps.required && <span className="text-tiffany ml-1">*</span>}
      </label>

      {props.type === 'select' ? (
        <div className="relative">
          <select
            className={`${baseInputClasses} appearance-none cursor-pointer`}
            {...(restProps as SelectHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            {props.options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#141414] text-white">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          className={baseInputClasses}
          {...(restProps as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {(error || helperText) && (
        <p className={`text-[0.65rem] tracking-wide ml-1 ${error ? 'text-red-400' : 'text-white/40'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
