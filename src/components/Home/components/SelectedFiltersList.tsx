import {
  ICheckBoxValue,
  IPriceRange,
  ISelectedFilters,
  ISurfaceRange,
} from "../../../types/house";
import SelectedFilter from "./SelectedFilter";

interface ISelectedFiltersList {
  selectedFilters: ISelectedFilters;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  setPriceRange: React.Dispatch<React.SetStateAction<IPriceRange>>;
  setRegionOptions: React.Dispatch<React.SetStateAction<ICheckBoxValue[]>>;
  setBedCount: React.Dispatch<React.SetStateAction<number>>;
  setSurfaceRange: React.Dispatch<React.SetStateAction<ISurfaceRange>>;
}

export default function SelectedFiltersList({
  selectedFilters,
  setSelectedFilters,
  setRegionOptions,
}: ISelectedFiltersList) {
  console.log("selectedFilters@@@@", selectedFilters);
  const handleRemoveFilter = (key: string | number, filterName: string) => {
    console.log(key);
    console.log(filterName);

    setRegionOptions((prev) => {
      return prev.map((value) =>
        value.label === filterName
          ? { ...value, isChecked: !value.isChecked }
          : value
      );
    });

    setSelectedFilters((prev: ISelectedFilters) => {
      if (key === "region" && prev?.region) {
        const filteredList = prev?.region.filter(
          (option) => option.label !== filterName
        );

        return { ...prev, region: filteredList };
      } else if (key === "minPrice") {
        return {
          ...prev,
          price: {
            minPrice: 0,
            maxPrice: prev.price.maxPrice,
          },
        };
      } else if (key === "maxPrice") {
        return {
          ...prev,
          price: {
            minPrice: prev.price.minPrice,
            maxPrice: Infinity,
          },
        };
      } else if (key === "minSurface") {
        return {
          ...prev,
          surface: {
            minSurface: 0,
            maxSurface: prev.surface.maxSurface,
          },
        };
      } else if (key === "maxSurface") {
        return {
          ...prev,
          surface: {
            minSurface: prev.surface.minSurface,
            maxSurface: Infinity,
          },
        };
      } else if (key === "badroom") {
        return { ...prev, badroom: 0 };
      } else {
        return { ...prev };
      }
    });
  };

  const { price, region, surface, badroom } = selectedFilters || {};
  return (
    <div className="flex items-center gap-4">
      {price?.minPrice !== 0 && (
        <SelectedFilter
          handleRemoveFilter={handleRemoveFilter}
          filterKey="minPrice"
          filterName={`From-${price.minPrice}$`}
        />
      )}
      {price?.maxPrice !== Infinity && (
        <SelectedFilter
          handleRemoveFilter={handleRemoveFilter}
          filterKey="maxPrice"
          filterName={`To-${price.maxPrice}$`}
        />
      )}
      {region?.map((region) => (
        <SelectedFilter
          key={region.label}
          handleRemoveFilter={handleRemoveFilter}
          filterKey="region"
          filterName={region.label}
        />
      ))}
      {surface?.minSurface && (
        <SelectedFilter
          handleRemoveFilter={handleRemoveFilter}
          filterKey="minSurface"
          filterName={`From-${surface.minSurface}m`}
        />
      )}
      {surface?.maxSurface !== Infinity && (
        <SelectedFilter
          handleRemoveFilter={handleRemoveFilter}
          filterKey="maxSurface"
          filterName={`To-${surface.maxSurface},`}
        />
      )}
      {badroom !== 0 && (
        <SelectedFilter
          filterKey="badroom"
          filterName={`${badroom} bed`}
          handleRemoveFilter={handleRemoveFilter}
        />
      )}
    </div>
  );
}
