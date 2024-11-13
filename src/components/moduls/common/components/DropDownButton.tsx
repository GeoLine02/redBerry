import { IoIosArrowDown } from "react-icons/io";
import { FilterModalState } from "../../../../types/house";

interface IDropDownButton {
  title: string;
  isActive: boolean;
  handleOpenModal: (key: keyof FilterModalState) => void;
}

export default function DropDownButton({
  title,
  isActive,
  handleOpenModal,
}: IDropDownButton) {
  return (
    <div
      onClick={() => handleOpenModal(title as keyof FilterModalState)}
      className={`cursor-pointer flex gap-1 items-center p-2 rounded-lg
    ${isActive && "bg-lightGray opacity-80 "}
    `}
    >
      <span>{title}</span>
      <IoIosArrowDown
        size={15}
        className={`${
          isActive
            ? "rotate-180 transition-all duration-300"
            : "transition-all duration-300"
        }`}
      />
    </div>
  );
}
