"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      <div className="relative w-6 h-6">
        {rightIcon && (
          <Image
            src={rightIcon || ""}
            alt="right button icon"
            fill
            className="object-contain"
          ></Image>
        )}
      </div>
    </button>
  );
};
export default CustomButton;
