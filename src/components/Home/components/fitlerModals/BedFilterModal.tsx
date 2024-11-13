import { FilterModalState, ISelectedFilters } from "../../../../types/house";
import Input from "../../../moduls/common/components/Input";
import HouseFilterModal from "../HouseFilterModal";

interface IBedFIlterModalProps {
  setBedCount: React.Dispatch<React.SetStateAction<number>>;
  bedCount: number;
  isFilterModalOpen: FilterModalState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  handleOpenModal: (key: keyof FilterModalState) => void;
}

export default function BedFilterModal({
  bedCount,
  setBedCount,
  isFilterModalOpen,
  setSelectedFilters,
  handleOpenModal,
}: IBedFIlterModalProps) {
  const submitFilterValues = () => {
    setSelectedFilters((prev) => {
      handleOpenModal("badroom");
      if (bedCount) {
        return { ...prev, badroom: Number(bedCount) };
      } else {
        return { ...prev };
      }
    });
  };

  return (
    <div>
      {isFilterModalOpen.badroom && (
        <HouseFilterModal
          submitFilterValues={submitFilterValues}
          title="Bed count"
          className="min-w-[382px] max-w-[382px] space-y-6 absolute left-0 top-14 z-50"
        >
          <Input setValue={setBedCount} value={bedCount} placeholder="0" />
        </HouseFilterModal>
      )}
    </div>
  );
}
