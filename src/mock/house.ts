import { IHouse } from "../types/house";
import RoomPhoto from "../assets/roomPhoto.png";
import RoomPhoto2 from "../assets/roomPhoto-2.png";
import RoomPhoto3 from "../assets/roomPhoto-3.png";
import RoomPhoto4 from "../assets/roomPhoto-4.png";
import RoomPhoto5 from "../assets/roomPhoto-5.png";
import RoomPhoto6 from "../assets/roomPhoto-6.png";
import RoomPhoto7 from "../assets/roomPhoto-7.png";
import RoomPhoto8 from "../assets/roomPhoto-8.png";

const getRandomPrice = () => Math.floor(Math.random() * 100000);
const getRandomSurface = () => Math.floor(Math.random() * 60);

const regions = [
  "Kartli",
  "Kakheti",
  "Imereti",
  "Samegrelo",
  "Guria",
  "Racha",
  "Lechxumi",
  "Samtskhe-javakheti",
  "Adjara",
  "Svaneti",
  "Mtskheta-mtianeti",
  "Tbilisi",
];

const getRandomRegion = () =>
  regions[Math.floor(Math.random() * regions.length)];

const getRandomBedCount = () => Math.floor(Math.random() * 5) + 1;

export const houses: IHouse[] = [
  {
    id: 1,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Kartli, Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto,
    surface: getRandomSurface(),
  },
  {
    id: 2,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto2,
    surface: getRandomSurface(),
  },
  {
    id: 3,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto3,
    surface: getRandomSurface(),
  },
  {
    id: 4,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto4,
    surface: getRandomSurface(),
  },
  {
    id: 5,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto5,
    surface: getRandomSurface(),
  },
  {
    id: 6,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto6,
    surface: getRandomSurface(),
  },
  {
    id: 7,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto7,
    surface: getRandomSurface(),
  },
  {
    id: 8,
    price: getRandomPrice(),
    region: getRandomRegion(),
    address: "Tbilisi, I,chavchavadzis 53",
    transactionType: "For rent",
    bedCount: getRandomBedCount(),
    img: RoomPhoto8,
    surface: getRandomSurface(),
  },
];

export const houseFilterOptions = {
  region: [
    {
      label: "Kartli",
      isChecked: false,
    },
    {
      label: "Kakheti",
      isChecked: false,
    },
    {
      label: "Imereti",
      isChecked: false,
    },
    {
      label: "Samegrelo",
      isChecked: false,
    },
    {
      label: "Guria",
      isChecked: false,
    },
    {
      label: "Racha",
      isChecked: false,
    },
    {
      label: "Lechxumi",
      isChecked: false,
    },

    { label: "Samtskhe-javakheti", isChecked: false },
    { label: "Adjara", isChecked: false },
    { label: "Svaneti", isChecked: false },
    { label: "Mtskheta-mtianeti", isChecked: false },
    {
      label: "Tbilisi",
      isChecked: false,
    },
  ],
  price: {
    minPrice: [50000, 100000, 150000, 200000, 300000],
    maxPrice: [50000, 100000, 150000, 200000, 300000],
  },
  surface: {
    minSurface: [20, 30, 40, 50, 60],
    maxSurface: [20, 30, 40, 50, 60],
  },
};
