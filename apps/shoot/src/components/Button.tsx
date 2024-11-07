import React, { ButtonHTMLAttributes } from 'react';
import { cn } from './utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: 'primary' | 'secondary';
}

const Variants = {
  primary: {
    border: '#140200',
    colors: ['#dc391d', '#f06a2d', '#fc8a3a'],
  },
  secondary: {
    border: '#140200',
    colors: ['#02814a', '#37b322', '#50d501'],
  },
  disabled: {
    border: '#19283b',
    colors: ['#1f303e', '#2e4161', '#2e4161'],
  },
};
export const Button = (props: ButtonProps) => {
  const { children, className, variants = 'primary', disabled } = props;
  const variants_ = disabled ? 'disabled' : variants;
  return (
    <button
      {...props}
      type="button"
      disabled={disabled}
      className={cn(
        'h-9 rounded-[10px] border-2 border-[#0d0000] px-5 flex items-center w-max relative overflow-hidden ',
        !disabled && 'active:opacity-85 active:[&>.text]:top-[2px]',
        className,
      )}
      style={{
        textShadow: `${Variants[variants_].border} 2px 0px 0px, ${Variants[variants_].border} 1.75517px 0.958851px 0px, ${Variants[variants_].border} 1.0806px 1.68294px 0px, ${Variants[variants_].border} 0.141474px 1.99499px 0px, ${Variants[variants_].border} -0.832294px 1.81859px 0px, ${Variants[variants_].border} -1.60229px 1.19694px 0px, ${Variants[variants_].border} -1.97998px 0.28224px 0px, ${Variants[variants_].border} -1.87291px -0.701566px 0px, ${Variants[variants_].border} -1.30729px -1.5136px 0px, ${Variants[variants_].border} -0.421592px -1.95506px 0px, ${Variants[variants_].border} 0.567324px -1.91785px 0px, ${Variants[variants_].border} 1.41734px -1.41108px 0px, ${Variants[variants_].border} 1.92034px -0.558831px 0px`,
      }}
    >
      <div
        className={cn('absolute left-0 top-0 bottom-0 right-0 rounded-md z-0')}
        style={{
          background: Variants[variants_].colors[0],
        }}
      />
      <div
        className={cn(
          'absolute left-0 top-0 bottom-1 right-0 bg-[#] rounded-md z-1',
        )}
        style={{
          background: Variants[variants_].colors[1],
        }}
      />
      <div
        className={cn(
          'absolute left-0 top-0 bottom-2 right-0 bg-[#] rounded-md z-2',
        )}
        style={{
          background: Variants[variants_].colors[2],
        }}
      />
      <span
        className={cn(
          'text relative z-3 text-xl text-t-white font-extrabold ',
          disabled && 'text-[#9da7be]',
        )}
      >
        {children}
      </span>
    </button>
  );
};
