import React from 'react';

type SidebarLinkProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  textColor?: string;
  backgroundColor?:string;
};

const BASE_SIDEBAR_CLASSES =
  'cursor-pointer flex gap-3 border-none p-4 text-base cursor-pointer font-bold text-medGray font-sans rounded-r-full w-full border-2 font-bold m leading-none hover:bg-[#635FC71A] hover:dark:bg-white hover:text-mainPurple active:bg-mainPurple active:text-white';

/**
 * Primary UI component for user interaction
 */
export const SidebarLink = ({ children, textColor, backgroundColor,...props }: SidebarLinkProps) => {
  return (
    <button type="button" className={`${BASE_SIDEBAR_CLASSES} text-${textColor} bg-${backgroundColor}`} {...props}>
      {children}
    </button>
  );
};
