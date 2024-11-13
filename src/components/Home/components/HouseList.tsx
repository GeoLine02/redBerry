import { IHouse } from "../../../types/house";
import HouseCard from "./HouseCard";

interface IHouseListProps {
  houseList: IHouse[];
}

const HouseList = ({ houseList }: IHouseListProps) => {
  return (
    <div className="container grid grid-cols-4 gap-5 pb-5 mx-auto">
      {houseList.map((house: IHouse) => (
        <HouseCard
          key={house.id}
          address={house.address}
          bedCount={house.bedCount}
          img={house.img}
          price={house.price}
          surface={house.surface}
          transactionType={house.transactionType}
        />
      ))}
    </div>
  );
};

export default HouseList;
