import { Fragment, useState } from "react";
import Navbar from "./../components/navBar";
import Footer from "./../components/footer";
import data from "./../store/data";
import { createSlice } from "@reduxjs/toolkit";
import OrderSubmitCard from "../components/orderSubmitCard";
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "http://localhost:3000/";

  const [orederSubmitCard, setOrderSubmitCard] = useState(false)
  const navigate = useNavigate()




  const submitOrderHandler = (e) => {
    e.preventDefault()
    setOrderSubmitCard(true)
  }
  
  
  return (
    <Fragment>
      <Navbar />
      {orederSubmitCard && <OrderSubmitCard />}
      <button  onClick={() => navigate(-1)} className="mx-[24px] mt-[16px] mb-[48px] text-[15px] font-medium opacity-50">
        Go Back
      </button>
      <div className="box-border w-full px-[48px]">
        <p className="mb-[32px] text-[28px] font-bold tracking-[1px]">
          CHECKOUT
        </p>
        <form action="">
          <p className="mb-[16px] text-[13px] font-bold uppercase text-orange">
            Billing details
          </p>
          <div>
            <label className="text-[12px] font-bold ">Name</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="Alexei Ward"
              type="text"
            />
          </div>
          <div>
            <label className="text-[12px] font-bold ">Email Address</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="alexei@mail.com"
              type="text"
            />
          </div>
          <div>
            <label className="text-[12px] font-bold ">Phone Number</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="+1 202-555-0136"
              type="text"
            />
          </div>
          {/* shipping info///////////////////////////////////  */}
          <p className="mb-[16px] text-[13px] font-bold uppercase text-orange">
            shipping info
          </p>
          <div>
            <label className="text-[12px] font-bold ">Your Address</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="1137 Williams Avenue"
              type="text"
            />
          </div>
          <div>
            <label className="text-[12px] font-bold ">ZIP Code</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="10001"
              type="text"
            />
          </div>
          <div>
            <label className="text-[12px] font-bold ">City</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="New York"
              type="text"
            />
          </div>
          <div>
            <label className="text-[12px] font-bold ">Country</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="United States"
              type="text"
            />
          </div>
          {/* ///////////////////////////////////e-Money Number  */}
          <div>
            <label className="text-[12px] font-bold ">e-Money Number</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="238521993"
              type="text"
            />
          </div>
          <div>
            <label className="text-[12px] font-bold ">e-Money PIN</label>
            <input
              className=" mb-[24px] mt-[9px] box-border h-[56px] w-full rounded-[8px] border-[1px] border-solid border-[#CFCFCF] pl-[24px] placeholder:text-[14px] placeholder:font-bold placeholder:opacity-50 "
              placeholder="6891"
              type="text"
            />
          </div>
          {/* ///////////////////////// summery */}
          <div className="box-border">
            <p className="mb-[32px] text-[18px] font-bold uppercase tracking-[1.3px] ">
              summary
            </p>
            <div className="mb-[24px]  flex w-full justify-between ">
              <div className="flex">
                <div className="mr-[16px] h-[64px] w-[64px] rounded-[8px] bg-grey">
                  <img
                    src={env.PUBLIC_URL + data[1].image.mobile}
                    className="rounded-[8px]"
                    alt=""
                  />
                </div>
                <div className="mr-[20px]">
                  <p className="text-[15px] font-bold">{data[1].name}</p>
                  <p className="text-[15px] font-bold opacity-50">
                    {data[1].price}
                  </p>
                </div>
              </div>
              <p className="">x1</p>
            </div>
            <div className="mb-[24px]  flex w-full justify-between ">
              <div className="flex">
                <div className="mr-[16px] h-[64px] w-[64px] rounded-[8px] bg-grey">
                  <img
                    src={env.PUBLIC_URL + data[1].image.mobile}
                    className="rounded-[8px]"
                    alt=""
                  />
                </div>
                <div className="mr-[20px]">
                  <p className="text-[15px] font-bold">{data[1].name}</p>
                  <p className="text-[15px] font-bold opacity-50">
                    {data[1].price}
                  </p>
                </div>
              </div>
              <p className="">x1</p>
            </div>
            <div className="mb-[24px]  flex w-full justify-between ">
              <div className="flex">
                <div className="mr-[16px] h-[64px] w-[64px] rounded-[8px] bg-grey">
                  <img
                    src={env.PUBLIC_URL + data[1].image.mobile}
                    className="rounded-[8px]"
                    alt=""
                  />
                </div>
                <div className="mr-[20px]">
                  <p className="text-[15px] font-bold">{data[1].name}</p>
                  <p className="text-[15px] font-bold opacity-50">
                    {data[1].price}
                  </p>
                </div>
              </div>
              <p className="">x1</p>
            </div>
            <div className="mb-[24px]  flex w-full justify-between ">
              <div className="flex">
                <div className="mr-[16px] h-[64px] w-[64px] rounded-[8px] bg-grey">
                  <img
                    src={env.PUBLIC_URL + data[1].image.mobile}
                    className="rounded-[8px]"
                  />
                </div>
                <div className="mr-[20px]">
                  <p className="text-[15px] font-bold">{data[1].name}</p>
                  <p className="text-[15px] font-bold opacity-50">
                    {data[1].price}
                  </p>
                </div>
              </div>
              <p className="">x1</p>
            </div>
            <div className="mt-[32px]">
              <div className="mb-[8px] flex justify-between">
                <p className="text-[15px] font-medium opacity-50">TOTAL</p>
                <p className="text-[18px] font-bold">$ 5,396</p>
              </div>
              <div className="mb-[8px] flex justify-between">
                <p className="text-[15px] font-medium opacity-50">SHIPPING</p>
                <p className="text-[18px] font-bold">$ 50</p>
              </div>
              <div className="mb-[24px] flex justify-between">
                <p className="text-[15px] font-medium opacity-50">
                  VAT (INCLUDED)
                </p>
                <p className="text-[18px] font-bold">$ 1,079</p>
              </div>
              <div className="mb-[24px] flex justify-between">
                <p className="text-[15px] font-medium opacity-50">
                  GRAND TOTAL
                </p>
                <p className="text-[18px] font-bold text-orange">$ 5,446</p>
              </div>
            </div>
            <button onClick={submitOrderHandler} type="submit" className="h-[48px] w-full mb-[130px] bg-orange text-white hover:bg-lightOrange">
              CONTINUE & PAY
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Form;
