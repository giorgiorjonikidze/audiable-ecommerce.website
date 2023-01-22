import { Fragment } from "react";
import oval from "../assets/Oval.svg";
import checkIcon from "../assets/Path 4.svg";
import data from './../store/data';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from './../store/store';


const OrderSubmitCard = () => {
    const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "http://localhost:3000/";

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goToHomeHandler = () => {
    navigate("/")
    dispatch(cartActions.removeAll())
  };

  return (
    <Fragment>
      <div className="backdrop"></div>
      <div className="modal-submit box-border flex w-[327px] flex-col rounded-[8px] px-[28px] py-[32px] md:w-[540px]">
        <div className="mb-[24px]">
          <img src={oval} className="relative" />
          <img src={checkIcon} className="absolute top-[54px] left-[48px]" />
        </div>
        <p className="mb-[16px] text-[24px] font-bold tracking-[0.86px]">
          THANK YOU FOR YOUR ORDER
        </p>
        <p className="font-medum mb-[24px] text-[15px] opacity-50">
          You will receive an email confirmation shortly.
        </p>
        <div className=" bg-grey flex flex-col items-center rounded-t-[8px] ">
          <div className="mb-[12px]  flex w-full justify-between mt-[24px] ">
            <div className="flex">
              <div className="mr-[16px] h-[64px] w-[64px] rounded-[8px] bg-grey ">
                <img
                  src={env.PUBLIC_URL + data[1].image.mobile}
                  className="rounded-[8px]"
                  alt=""
                />
              </div>
              <div className="mr-[20px] rounded-[8px]">
                <p className="text-[15px] font-bold">{data[1].name}</p>
                <p className="text-[15px] font-bold opacity-50 ">
                  {data[1].price}
                </p>
              </div>
            </div>
            <p className="mr-[24px]">x1</p>
          </div> 
          <div className="stroke h-[1px]  bg-black w-[215px]  mb-[12px] opacity-10"></div>
          <p  className="font-medum pb-[16px] text-[15px] opacity-50">and 2 other item(s)</p>
        </div>
        <div className="h-[92px] w-[full] bg-black text-white rounded-b-[8px] box-border mb-[24px] pl-[24px] pt-[15px]">
            <p className="font-medium text-[15px] opacity-50  mb-[8px] tracking-[0.86px]">GRAND TOTAL</p>
            <p className="font-bold text-[18px] ">$ 5,446</p>
        </div>
        <button
          onClick={goToHomeHandler}
          className="h-[48px] w-full bg-orange text-white hover:bg-lightOrange"
        >
          BACK TO HOME
        </button>
      </div>
    </Fragment>
  );
};

export default OrderSubmitCard;
