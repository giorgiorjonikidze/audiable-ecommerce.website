import { Fragment } from "react";
import ButtonOrange from "./buttons";
import { useNavigate } from "react-router-dom";
import data from "./../store/data";

const ItemCateg = ({ item, id, flexReverse }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "http://localhost:3000/";

  const navigate = useNavigate();

  const ButtonClickHandler = (e) => {
    navigate("/details/" + data[id].slug, { state: { id: id } });
  };
  return (
    <Fragment>
      <div className={!flexReverse ?  "xl:flex xl:gap-[125px] xl:items-center xl:px-[141px] " :  "xl:flex xl:gap-[125px] xl:items-center xl:px-[141px] flex-row-reverse"}>
        <div className=" mb-[32px] h-[352px] md:mb-[52px] xl:h-auto">
          <picture>
            <source
              media="(min-width: 1400px)"
              srcSet={env.PUBLIC_URL + item.categoryImage.desktop}
            />
            <source
              media="(min-width: 760px)"
              srcSet={env.PUBLIC_URL + item.categoryImage.tablet}
            />
            <img
              src={env.PUBLIC_URL + item.categoryImage.mobile}
              className="rounded-[8px] xl:w-[540px]"
            />
          </picture>
        </div>
        <div className="mb-[120px] flex flex-col items-center xl:items-start">
          {item.new && (
            <p className="test-orange mb-[24px] text-[14px] tracking-[10px] text-orange">
              NEW PRODUCT
            </p>
          )}
          <h1 className="mb-[24px] w-[227px] text-center text-[28px] font-bold tracking-[1px] md:w-[350px] md:text-[40px] xl:text-left">
            {item.name}
          </h1>
          <p className="mb-[24px] w-[327px] text-center text-[15px] font-medium opacity-50 md:w-[572px] xl:text-left xl:w-[445px]">
            {item.description}
          </p>
          <button
            onClick={ButtonClickHandler}
            className="h-[48px] w-[160px] bg-orange text-white hover:bg-lightOrange"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemCateg;
