interface ICardProps {
  hasBorder?: boolean;
  hasShadow?: boolean;
  children: React.ReactNode;
  className?: string;
  borderColor?: "gray" | "red";
  background?: "white" | "red";
}

export default function Card({
  hasBorder,
  hasShadow,
  className,
  borderColor,
  background,
  children,
}: ICardProps) {
  return (
    <div
      className={`${className} ${hasBorder && "rounded-xl"} ${
        hasShadow && "shadow-md"
      } ${borderColor === "gray" && "border-lightGray border"}
      ${borderColor === "red" && "border-mediumRed border"}
      ${background === "white" && "bg-white"}
      ${background === "red" && "bg-mediumRed"}
      `}
    >
      {children}
    </div>
  );
}
