import { houseFilterOptions } from "../../../../mock/house";
import {
  FilterModalState,
  IPriceRange,
  ISelectedFilters,
} from "../../../../types/house";
import Card from "../../../moduls/common/components/Card";
import HouseFilterModal from "../HouseFilterModal";

interface IPriceFitlerModalProps {
  priceRange: IPriceRange;
  setPriceRange: React.Dispatch<React.SetStateAction<IPriceRange>>;
  isFilterModalOpen: FilterModalState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  handleOpenModal: (key: keyof FilterModalState) => void;
}

export default function PriceFilterModal({
  setPriceRange,
  priceRange,
  isFilterModalOpen,
  setSelectedFilters,
  handleOpenModal,
}: IPriceFitlerModalProps) {
  const hamdleSelectMinPrice = (minPrice: number) => {
    setPriceRange((prev) => {
      if (minPrice) {
        return { ...prev, minPrice };
      } else {
        return { ...prev };
      }
    });
  };

  const handleSelectMaxPrice = (maxPirce: number) => {
    setPriceRange((prev) => {
      if (maxPirce) {
        return { ...prev, maxPrice: maxPirce };
      } else {
        return { ...prev };
      }
    });
  };

  const submitFilterValues = () => {
    setSelectedFilters((prev) => {
      handleOpenModal("price");
      return { ...prev, price: priceRange };
    });
  };

  return (
    <div>
      {isFilterModalOpen.price && (
        <HouseFilterModal
          submitFilterValues={submitFilterValues}
          title="Price range"
          className="min-w-[382px] max-w-[382px] space-y-6 absolute left-0 top-14 z-50"
        >
          <div className="grid grid-cols-2 gap-x-6">
            <div>
              {priceRange.minPrice !== 0 && (
                <Card
                  background="white"
                  borderColor="gray"
                  className="px-2 py-1 mb-3"
                  hasBorder
                >
                  From: {priceRange.minPrice}$
                </Card>
              )}
              <h1>Min. price</h1>
              <div className="flex flex-col gap-2 mt-4">
                {houseFilterOptions.price.minPrice.map((price: number) => (
                  <div onClick={() => hamdleSelectMinPrice(price)} key={price}>
                    <button>{price}$</button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {priceRange.maxPrice !== Infinity && (
                <Card
                  background="white"
                  borderColor="gray"
                  className="py-1 px-2 mb-3"
                  hasBorder
                >
                  To: {priceRange.maxPrice}$
                </Card>
              )}
              <h1>Max. price</h1>
              <div className="flex flex-col gap-2 mt-4">
                {houseFilterOptions.price.maxPrice.map((price: number) => (
                  <div onClick={() => handleSelectMaxPrice(price)} key={price}>
                    <button>{price}$</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HouseFilterModal>
      )}
    </div>
  );
}
