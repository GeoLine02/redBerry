import {
  FilterModalState,
  ICheckBoxValue,
  IHouse,
  IPriceRange,
  ISelectedFilters,
  ISurfaceRange,
} from "../../../types/house";
import Card from "../../moduls/common/components/Card";
import DropDownButton from "../../moduls/common/components/DropDownButton";
import RegionFilterModal from "./fitlerModals/RegionFilterModal";
import PriceFilterModal from "./fitlerModals/PriceFilterModal";
import SurfaceFilterModal from "./fitlerModals/SurfaceFilterModal";
import BedFilterModal from "./fitlerModals/BedFilterModal";

interface IHouseFilterProps {
  isFilterModalOpen: FilterModalState;
  regionOptions: ICheckBoxValue[];
  setRegionOptions: React.Dispatch<React.SetStateAction<ICheckBoxValue[]>>;
  setPriceRange: React.Dispatch<React.SetStateAction<IPriceRange>>;
  priceRange: IPriceRange;
  surfaceRange: ISurfaceRange;
  setSurfaceRange: React.Dispatch<React.SetStateAction<ISurfaceRange>>;
  bedCount: number;
  setBedCount: React.Dispatch<React.SetStateAction<number>>;
  handleOpenModal: (key: keyof FilterModalState) => void;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  setHouseList: React.Dispatch<React.SetStateAction<IHouse[]>>;
}

export default function HouseFIlter({
  isFilterModalOpen,
  bedCount,
  handleOpenModal,
  priceRange,
  regionOptions,
  setBedCount,
  setPriceRange,
  setRegionOptions,
  setSurfaceRange,
  surfaceRange,
  setSelectedFilters,
  setHouseList,
}: IHouseFilterProps) {
  return (
    <Card
      className="flex p-1 items-center gap-8 w-fit font-semibold"
      hasBorder={true}
      hasShadow={false}
      borderColor="gray"
    >
      <div className="relative">
        <DropDownButton
          handleOpenModal={handleOpenModal}
          isActive={false}
          title="Region"
        />
        <RegionFilterModal
          handleOpenModal={handleOpenModal}
          isFilterModalOpen={isFilterModalOpen}
          regionOptions={regionOptions}
          setRegionOptions={setRegionOptions}
          setSelectedFilters={setSelectedFilters}
          setHouseList={setHouseList}
        />
      </div>
      <div className="relative">
        <DropDownButton
          handleOpenModal={handleOpenModal}
          isActive={false}
          title="Price"
        />
        <PriceFilterModal
          handleOpenModal={handleOpenModal}
          isFilterModalOpen={isFilterModalOpen}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="relative">
        <DropDownButton
          handleOpenModal={handleOpenModal}
          isActive={false}
          title="Surface"
        />
        <SurfaceFilterModal
          handleOpenModal={handleOpenModal}
          isFilterModalOpen={isFilterModalOpen}
          setSurfaceRange={setSurfaceRange}
          surfaceRange={surfaceRange}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="relative">
        <DropDownButton
          handleOpenModal={handleOpenModal}
          isActive={false}
          title="BadRoom"
        />

        <BedFilterModal
          handleOpenModal={handleOpenModal}
          bedCount={bedCount}
          isFilterModalOpen={isFilterModalOpen}
          setBedCount={setBedCount}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
    </Card>
  );
}
