export interface IHouse {
  id: number;
  img: string;
  region: string;
  price: number;
  address: string;
  bedCount: number;
  surface: number;
  transactionType: "For sell" | "For rent";
}

export interface FilterModalState {
  region: boolean;
  price: boolean;
  surface: boolean;
  badroom: boolean;
}

export interface IRegionType {
  label: string;
  isChecked: boolean;
}

export interface ISelectedFilters {
  price: IPriceRange;
  surface: ISurfaceRange;
  region: IRegionType[] | null;
  badroom: number;
}

export interface ICheckBoxValue {
  isChecked: boolean;
  label: string;
}

export interface IPriceRange {
  minPrice: number;
  maxPrice: number;
}

export interface ISurfaceRange {
  minSurface: number;
  maxSurface: number;
}
