import {
  FilterModalState,
  ICheckBoxValue,
  IHouse,
  ISelectedFilters,
} from "../../../../types/house";
import CheckBox from "../../../moduls/common/components/CheckBox";
import HouseFilterModal from "../HouseFilterModal";

interface IRegionFilterModalProps {
  handleOpenModal: (key: keyof FilterModalState) => void;
  isFilterModalOpen: FilterModalState;
  regionOptions: ICheckBoxValue[];
  setRegionOptions: React.Dispatch<React.SetStateAction<ICheckBoxValue[]>>;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  setHouseList: React.Dispatch<React.SetStateAction<IHouse[]>>;
}

export default function RegionFilterModal({
  isFilterModalOpen,
  regionOptions,
  setRegionOptions,
  setSelectedFilters,
  handleOpenModal,
}: IRegionFilterModalProps) {
  const submitFilterValues = () => {
    setSelectedFilters((prev) => {
      const selectedRegions = regionOptions?.filter(
        (region) => region.isChecked
      );

      handleOpenModal("region");

      if (selectedRegions.length) {
        return { ...prev, region: selectedRegions };
      } else {
        return { ...prev, region: null };
      }
    });
  };

  return (
    <div>
      {isFilterModalOpen.region && (
        <HouseFilterModal
          submitFilterValues={submitFilterValues}
          className="min-w-[731px] max-w-[731px] space-y-6 absolute left-0 top-14 z-50"
          title="Regions"
        >
          <div className="grid grid-cols-3 gap-x-14">
            {regionOptions?.map((region: ICheckBoxValue) => (
              <CheckBox
                setCheckValues={setRegionOptions}
                key={region.label}
                isChecked={region.isChecked}
                label={region.label}
              />
            ))}
          </div>
        </HouseFilterModal>
      )}
    </div>
  );
}
