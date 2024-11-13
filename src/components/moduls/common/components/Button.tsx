import { IconType } from "react-icons";

interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  borderColor?: "red" | "gray";
  rounded: "sm" | "md" | "lg" | "xl" | "full";
  backgroundColor: "white" | "red";
  Icon?: IconType;
  direction?: "ltr" | "rtl";
  className?: string;
  textColor: "white" | "black" | "red";
  iconSize?: number;
}

export default function Button({
  title,
  borderColor,
  rounded,
  backgroundColor,
  Icon,
  direction,
  textColor,
  iconSize,
  className,
  ...rest
}: IButtonProps) {
  return (
    <div
      onClick={rest.onClick}
      className={`cursor-pointer gap-1 p-3 ${
        borderColor === "red" && "border border-mediumRed"
      }
      ${borderColor === "gray" && "border border-lightGray"}
    ${className}
    ${rounded === "lg" && "rounded-lg"}
    ${rounded === "md" && "rounded-md"}
    ${rounded === "xl" && "rounded-xl"}
    ${rounded === "full" && "rounded-full"}
    ${backgroundColor === "white" && "bg-white"}
    ${backgroundColor === "red" && "bg-mediumRed"}
    ${direction === "ltr" && "flex items-center gap-1"}
    ${direction === "rtl" && "flex flex-row-reverse gap-1 items-center"}
    ${textColor === "white" && "text-white"}
    ${textColor === "red" && "text-mediumRed"}
    ${textColor === "black" && "text-black"}
    `}
    >
      <button>{title}</button>
      {Icon && <Icon size={iconSize} />}
    </div>
  );
}
