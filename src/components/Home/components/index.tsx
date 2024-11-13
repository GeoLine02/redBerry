import Button from "../../moduls/common/components/Button";
import HouseFIlter from "./HouseFIlter";
import HouseList from "./HouseList";
import { GoPlus } from "react-icons/go";
import SelectedFiltersList from "./SelectedFiltersList";
import {
  FilterModalState,
  ICheckBoxValue,
  IPriceRange,
  ISelectedFilters,
  ISurfaceRange,
} from "../../../types/house";
import { useCallback, useEffect, useState } from "react";
import { houseFilterOptions, houses } from "../../../mock/house";

export default function Home() {
  const [houseList, setHouseList] = useState(houses);

  const [isFilterModalOpen, setIsModalOpen] = useState<FilterModalState>({
    region: false,
    price: false,
    surface: false,
    badroom: false,
  });

  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({
    price: { maxPrice: Infinity, minPrice: 0 },
    region: null,
    surface: { minSurface: 0, maxSurface: Infinity },
    badroom: 0,
  });

  const [regionOptions, setRegionOptions] = useState<ICheckBoxValue[]>(
    houseFilterOptions.region
  );
  const [priceRange, setPriceRange] = useState<IPriceRange>({
    minPrice: 0,
    maxPrice: Infinity,
  });

  const [surfaceRange, setSurfaceRange] = useState<ISurfaceRange>({
    minSurface: 0,
    maxSurface: Infinity,
  });

  const [bedCount, setBedCount] = useState<number>(0);
  const handleOpenModal = (key: keyof FilterModalState) => {
    key = key.toLowerCase() as keyof FilterModalState;
    setIsModalOpen((prevState) => ({
      region: key === "region" ? !prevState.region : false,
      price: key === "price" ? !prevState.price : false,
      surface: key === "surface" ? !prevState.surface : false,
      badroom: key === "badroom" ? !prevState.badroom : false,
    }));
  };

  console.log("selectedFilters", selectedFilters);

  const applyFilters = useCallback(() => {
    let filterList = houses;
    if (selectedFilters.region?.length) {
      const checkedRegions = regionOptions
        ?.filter((region) => region.isChecked)
        .map((region) => region.label);

      filterList = filterList?.filter((house) =>
        checkedRegions?.includes(house.region)
      );
    }

    if (selectedFilters?.price?.minPrice > 0) {
      filterList = filterList.filter(
        (house) => selectedFilters?.price?.minPrice <= house.price
      );
    }

    if (selectedFilters?.price?.maxPrice !== Infinity) {
      filterList = filterList.filter(
        (house) => selectedFilters?.price?.maxPrice >= house.price
      );
    }

    if (selectedFilters?.surface?.minSurface > 0) {
      filterList = filterList.filter(
        (house) => selectedFilters?.surface?.minSurface <= house.surface
      );
    }

    if (selectedFilters?.surface.maxSurface !== Infinity) {
      filterList = filterList.filter(
        (house) => selectedFilters?.surface.maxSurface >= house.surface
      );
    }

    if (selectedFilters.badroom !== 0) {
      console.log("enters");
      filterList = filterList.filter(
        (house) => selectedFilters.badroom === house.bedCount
      );
    } else {
      filterList = filterList.filter((house) => house.bedCount > 0);
    }

    console.log("minPrice", selectedFilters.price.minPrice);
    setHouseList(filterList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedFilters.region?.length,
    selectedFilters.price.minPrice,
    selectedFilters.price.maxPrice,
    selectedFilters.surface.minSurface,
    selectedFilters.surface.maxSurface,
    selectedFilters.badroom,
  ]);
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <div>
      <div className="mt-[77px] container mx-auto">
        <div className="flex items-baseline justify-between mb-6">
          <div className="flex flex-col gap-5">
            <HouseFIlter
              setHouseList={setHouseList}
              bedCount={bedCount}
              handleOpenModal={handleOpenModal}
              isFilterModalOpen={isFilterModalOpen}
              priceRange={priceRange}
              regionOptions={regionOptions}
              setBedCount={setBedCount}
              setPriceRange={setPriceRange}
              setRegionOptions={setRegionOptions}
              setSurfaceRange={setSurfaceRange}
              surfaceRange={surfaceRange}
              setSelectedFilters={setSelectedFilters}
            />
            <SelectedFiltersList
              setBedCount={setBedCount}
              setPriceRange={setPriceRange}
              setRegionOptions={setRegionOptions}
              setSurfaceRange={setSurfaceRange}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <Button
              textColor="white"
              className="w-fit"
              backgroundColor="red"
              rounded="xl"
              title="Add Listing"
              Icon={GoPlus}
              iconSize={25}
              direction="rtl"
            />
            <Button
              className="w-fit"
              textColor="red"
              backgroundColor="white"
              rounded="xl"
              title="Add agent"
              borderColor="red"
              direction="rtl"
              iconSize={25}
              Icon={GoPlus}
            />
          </div>
        </div>
        <HouseList houseList={houseList} />
      </div>
    </div>
  );
}
