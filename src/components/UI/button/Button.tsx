import React, { useMemo } from 'react';

export enum ButtonSize {
  small = "small",
  large = "large"
}

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  destructive = "destructive",
  empty = "empty",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
}

const getSizeClasses = (size: ButtonSize | undefined) => {
  switch (size) {
    case ButtonSize.small: {
      return 'px-4 py-2.5 ';
    }
    case ButtonSize.large: {
      return 'px-6 py-3';
    }
    default: {
      return 'px-6 py-3';
    }
  }
};

const getModeClasses = (variant?: ButtonVariant | undefined) => {
 switch (variant) {
    case ButtonVariant.primary:
     return `
          flex text-white bg-mainPurple border-mainPurple w-auto
          hover:bg-mainPurpleHover hover:border-mainPurpleHover
        `;
    case ButtonVariant.secondary: 
    return `
          flex text-white dark:text-[#FFFFFF40] bg-[#635FC740] border-none w-auto
          hover:bg-mainPurple hover:border-mainPurple dark:hover:text-white
         
  `;
  case ButtonVariant.destructive: {
    return `
      text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600
    `;
  }
  case ButtonVariant.empty: {
    return `
     flex text-black bg-transparent border-none
    `
  }
 }
 }

const BASE_BUTTON_CLASSES =
  'flex gap-2 cursor-pointer rounded-full border-2 font-bold leading-none';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size = ButtonSize.small, variant = ButtonVariant.primary, children, ...props }: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(variant);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [size, variant]);

  return (
    <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {children}
    </button>
  );
};
