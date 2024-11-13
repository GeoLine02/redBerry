/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "./Card";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  suffix?: string;
  className?: string;
}

export default function Input({
  setValue,
  value,
  suffix,
  className,
  ...rest
}: IInputProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof value);
    if (typeof value === "object") {
      setValue((prev: object) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else if (typeof value === "string" || typeof value === "number") {
      setValue(e.target.value);
    }
  };

  return (
    <Card
      className={`flex items-center gap-2 p-3 ${className}`}
      borderColor="gray"
      hasBorder
    >
      <input
        className="w-full focus:outline-none"
        placeholder={rest.placeholder}
        onChange={onChange}
        type={rest.type}
      />
      <span>{suffix}</span>
    </Card>
  );
}
