import { IoLocationSharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import SurfaceImage from "../../../assets/surface.svg";
import SignImage from "../../../assets/sign.png";
import Card from "../../moduls/common/components/Card";

interface IHouseCard {
  img: string;
  price: number;
  address: string;
  bedCount: number;
  surface: number;
  transactionType: "For sell" | "For rent";
}

export default function HouseCard({
  img,
  price,
  address,
  bedCount,
  surface,
  transactionType,
}: IHouseCard) {
  return (
    <Card className="cursor-pointer" hasBorder hasShadow>
      <div className="relative">
        <div className="absolute top-6 left-6 bg-mediumGray opacity-95 text-white px-3 py-1 rounded-full">
          {transactionType}
        </div>
        <img className="max-w-[384px]" src={img} alt="room photo" />
      </div>
      <div className="mx-7 my-5 flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-bold">{price} $</h1>
          <section className="flex items-center gap-1 text-gray-500 font-medium">
            <IoLocationSharp size={17} />
            <p>{address}</p>
          </section>
        </div>
        <div>
          <section className="flex items-center gap-8 text-gray-500">
            <div className="flex items-center gap-1">
              <IoIosBed size={25} />
              <p id="badCount">{bedCount}</p>
            </div>
            <div className="flex items-center gap-1">
              <img
                aria-labelledby="surfaceCount"
                src={SurfaceImage}
                alt="surface"
              />
              <p id="surfaceCount">{surface}</p>
            </div>
            <div className="flex items-center gap-1">
              <img aria-labelledby="sign" src={SignImage} alt="sign" />
              <p id="sign">0160</p>
            </div>
          </section>
        </div>
      </div>
    </Card>
  );
}
