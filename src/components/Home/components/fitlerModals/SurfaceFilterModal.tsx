import { houseFilterOptions } from "../../../../mock/house";
import {
  FilterModalState,
  ISelectedFilters,
  ISurfaceRange,
} from "../../../../types/house";
import HouseFilterModal from "../HouseFilterModal";

interface ISurfaceFilterModal {
  isFilterModalOpen: FilterModalState;
  surfaceRange: ISurfaceRange;
  setSurfaceRange: React.Dispatch<React.SetStateAction<ISurfaceRange>>;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  handleOpenModal: (key: keyof FilterModalState) => void;
}

export default function SurfaceFilterModal({
  isFilterModalOpen,
  setSurfaceRange,
  surfaceRange,
  setSelectedFilters,
  handleOpenModal,
}: ISurfaceFilterModal) {
  const handleSelectMinSurface = (minSurface: number) => {
    setSurfaceRange((prev) => {
      if (minSurface) {
        return { ...prev, minSurface: minSurface };
      } else {
        return { ...prev };
      }
    });
  };

  const handleSelectMaxSurface = (maxSurface: number) => {
    setSurfaceRange((prev) => {
      if (maxSurface) {
        return { ...prev, maxSurface: maxSurface };
      } else {
        return { ...prev };
      }
    });
  };

  const submitFilterValues = () => {
    setSelectedFilters((prev) => {
      handleOpenModal("surface");
      if (surfaceRange) {
        return { ...prev, surface: surfaceRange };
      } else {
        return { ...prev };
      }
    });
  };

  return (
    <div>
      {isFilterModalOpen.surface && (
        <HouseFilterModal
          submitFilterValues={submitFilterValues}
          title="Price Range"
          className="min-w-[382px] max-w-[382px] space-y-6 absolute left-0 top-14 z-50"
        >
          <div className="grid grid-cols-2 gap-x-6">
            <div>
              <h1>Min. Surface</h1>
              <div className="flex flex-col gap-2 mt-4">
                {houseFilterOptions.surface.minSurface.map(
                  (surface: number) => (
                    <div
                      onClick={() => handleSelectMinSurface(surface)}
                      key={surface}
                    >
                      <button>{surface}m</button>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <h1>Max. surface</h1>
              <div className="flex flex-col gap-2 mt-4">
                {houseFilterOptions.surface.minSurface.map(
                  (surface: number) => (
                    <div
                      onClick={() => handleSelectMaxSurface(surface)}
                      key={surface}
                    >
                      <button>{surface}m</button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </HouseFilterModal>
      )}
    </div>
  );
}
