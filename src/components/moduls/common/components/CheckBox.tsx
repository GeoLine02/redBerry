import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { ICheckBoxValue } from "../../../../types/house";

interface ICheckBoxProps {
  isChecked: boolean;
  label: string;
  setCheckValues: React.Dispatch<React.SetStateAction<ICheckBoxValue[]>>;
}

export default function CheckBox({
  isChecked,
  label,
  setCheckValues,
}: ICheckBoxProps) {
  const handleCheckValues = () => {
    setCheckValues((prevValues) =>
      prevValues.map((value) =>
        value.label === label
          ? { ...value, isChecked: !value.isChecked }
          : value
      )
    );
  };

  return (
    <div className="flex items-center gap-1">
      {isChecked ? (
        <IoIosCheckbox
          onClick={handleCheckValues}
          className="cursor-pointer"
          size={35}
          color="green"
        />
      ) : (
        <MdCheckBoxOutlineBlank
          onClick={handleCheckValues}
          className="cursor-pointer"
          size={35}
          color="gray"
        />
      )}
      <h1>{label}</h1>
    </div>
  );
}
