import ButtonOrange from "./buttons";
import data from "../store/data";

const RecomendedItem = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center">
        <p className="font-bold text-[24px] tracking-[0.86px] mb-[40px]">you may also like</p>
      <div className="mb-[56px]  flex flex-col items-center">
        <div className="h-[120px] w-[327px] mb-[32px] rounded-[8px]" >
          <img
            src={process.env.PUBLIC_URL + data[0].others[0].image.mobile}
            alt=""
          />
        </div>
        <p className="mb-[32px] font-bold text-[24px] tracking-[0.86px] text-center">{data[0].others[1].name}</p>
        <ButtonOrange>SEE PRODUCT</ButtonOrange>
      </div>
      {/* 2 */}
      <div className="mb-[56px]  flex flex-col items-center">
        <div className="h-[120px] w-[327px] mb-[32px] rounded-[8px]" >
          <img
            src={process.env.PUBLIC_URL + data[0].others[1].image.mobile}
            alt=""
          />
        </div>
        <p className="mb-[32px] font-bold text-[24px] tracking-[0.86px] text-center">{data[0].others[0].name}</p>
        <ButtonOrange>SEE PRODUCT</ButtonOrange>
      </div>
      {/* 3 */}
      <div className="mb-[56px]  flex flex-col items-center">
        <div className="h-[120px] w-[327px] mb-[32px] rounded-[8px]" >
          <img
            src={process.env.PUBLIC_URL + data[0].others[2].image.mobile}
            alt=""
          />
        </div>
        <p className="mb-[32px] font-bold text-[24px] tracking-[0.86px] text-center">{data[0].others[2].name}</p>
        <ButtonOrange>SEE PRODUCT</ButtonOrange>
      </div>
    </div>
  );
};

export default RecomendedItem;
