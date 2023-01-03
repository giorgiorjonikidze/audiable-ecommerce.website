import { Fragment } from "react";
import ButtonOrange from "./buttons";

const ItemCateg = ({data}) => {
  return (
    <Fragment>
      <div className="mx-[24px] mb-[32px] h-[352px]">
        <img
          src={process.env.PUBLIC_URL + data.categoryImage.mobile}
          className="rounded-[8px]"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="test-orange mb-[24px] text-[14px] tracking-[10px]">
          NEW PRODUCT
        </p>
        <h1 className="mb-[24px] w-[227px] text-center text-[28px] font-bold tracking-[1px]">
          {data.name}
        </h1>
        <p className="mb-[24px] w-[327px] text-center text-[15px] font-medium opacity-50">
          {data.description}
        </p>
        <ButtonOrange>SEE PRODUCT</ButtonOrange>
      </div>
    </Fragment>
  );
};

export default ItemCateg;
