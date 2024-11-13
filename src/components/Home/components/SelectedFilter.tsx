import { IoClose } from "react-icons/io5";
import Card from "../../moduls/common/components/Card";

interface ISelectedFilterListProps {
  filterName: string;
  filterKey: string | number;
  regionValue?: string | null;
  handleRemoveFilter: (key: string | number, filterName: string) => void;
}

export default function SelectedFilter({
  filterName,
  filterKey,
  handleRemoveFilter,
}: ISelectedFilterListProps) {
  return (
    <Card
      borderColor="gray"
      className="flex gap-2 py-1 px-2 items-center rounded-full"
    >
      <h1>{filterName}</h1>
      <IoClose
        onClick={() => handleRemoveFilter(filterKey, filterName as string)}
        size={20}
        className="cursor-pointer"
      />
    </Card>
  );
}
