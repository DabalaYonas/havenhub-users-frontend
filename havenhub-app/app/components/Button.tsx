"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`relative w-full disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition 
       ${outline ? " bg-zinc-100" : "company-bg-color"}
       ${outline ? "text-black" : "text-white"}
       ${small ? "py-1" : "py-3"}
       ${small ? "text-md" : "text-md"}
       ${small ? "font-normal" : "font-semibold"}
       ${small ? "border-[2px]" : "border-2"}
       `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;