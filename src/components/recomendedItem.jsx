import ButtonOrange from "./buttons";
import data from "../store/data";

const RecomendedItem = ({ productId, buttonClick }) => {
  const clickHandler = (e) => {
    buttonClick(e.target.id);
  };

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "http://localhost:3000/";
  return (
    <div className=" flex flex-col items-center md:px-[16px] md:mb-[80px]">
      <p className="mb-[40px] text-[24px] font-bold uppercase tracking-[0.86px] md:text-[32px]">
        you may also like
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full">
        <div className="mb-[56px]  flex flex-col items-center">
          <div className="mb-[32px] h-[120px] w-[327px] rounded-[8px] md:w-[223px] md:h-auto xl:w-[350px]">
            <picture>
              <source
                media="(min-width: 1400px)"
                srcSet={
                  env.PUBLIC_URL + data[productId].others[0].image.desktop
                }
              />
              <source
                media="(min-width: 760px)"
                srcSet={env.PUBLIC_URL + data[productId].others[0].image.tablet}
              />
              <img
                src={env.PUBLIC_URL + data[productId].others[0].image.mobile}
                className="rounded-[8px]"
              />
            </picture>
          </div>
          <p className="mb-[32px] text-center text-[24px] font-bold tracking-[0.86px]">
            {data[productId].others[0].name}
          </p>
          <button
            id={data[productId].others[0].slug}
            onClick={clickHandler}
            className="h-[48px] w-[160px] bg-orange text-white hover:bg-lightOrange"
          >
            SEE PRODUCT
          </button>
        </div>
        {/* 2 */}
        <div className="mb-[56px]  flex flex-col items-center">
          <div className="mb-[32px] h-[120px] w-[327px] rounded-[8px] md:w-[223px] md:h-auto xl:w-[350px]">
            <picture>
              <source
                media="(min-width: 1400px)"
                srcSet={
                  env.PUBLIC_URL + data[productId].others[1].image.desktop
                }
              />
              <source
                media="(min-width: 760px)"
                srcSet={env.PUBLIC_URL + data[productId].others[1].image.tablet}
              />

              <img
                src={env.PUBLIC_URL + data[productId].others[1].image.mobile}
                className="rounded-[8px]"
              />
            </picture>
          </div>
          <p className="mb-[32px] text-center text-[24px] font-bold tracking-[0.86px]">
            {data[productId].others[1].name}
          </p>
          <button
            id={data[productId].others[1].slug}
            onClick={clickHandler}
            className="h-[48px] w-[160px] bg-orange text-white hover:bg-lightOrange"
          >
            SEE PRODUCT
          </button>
        </div>
        {/* 3 */}
        <div className="mb-[56px]  flex flex-col items-center">
          <div className="mb-[32px] h-[120px] w-[327px] rounded-[8px] md:w-[223px] md:h-auto xl:w-[350px]">
            <picture>
              <source
                media="(min-width: 1400px)"
                srcSet={
                  env.PUBLIC_URL + data[productId].others[2].image.desktop
                }
              />
              <source
                media="(min-width: 760px)"
                srcSet={env.PUBLIC_URL + data[productId].others[2].image.tablet}
              />

              <img
                src={env.PUBLIC_URL + data[productId].others[2].image.mobile}
                className="rounded-[8px]"
              />
            </picture>
          </div>
          <p className="mb-[32px] text-center text-[24px] font-bold tracking-[0.86px]">
            {data[productId].others[2].name}
          </p>
          <button
            id={data[productId].others[2].slug}
            onClick={clickHandler}
            className="h-[48px] w-[160px] bg-orange text-white hover:bg-lightOrange"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomendedItem;
