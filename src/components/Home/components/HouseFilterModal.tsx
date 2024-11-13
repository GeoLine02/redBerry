import Button from "../../moduls/common/components/Button";
import Card from "../../moduls/common/components/Card";

interface IHouseFilterModal {
  title: string;
  children: React.ReactNode;
  className?: string;
  submitFilterValues: () => void;
  // handleFilterHouseList: () => void;
}

export default function HouseFilterModal({
  title,
  submitFilterValues,
  className,
  children,
}: IHouseFilterModal) {
  return (
    <Card
      className={className + " p-4"}
      background="white"
      borderColor="gray"
      hasBorder
      hasShadow
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <section>{children}</section>
      <div className="min-w-full">
        <Button
          onClick={submitFilterValues}
          className="w-fit"
          title="Select"
          backgroundColor="red"
          textColor="white"
          rounded="xl"
        />
      </div>
    </Card>
  );
}
