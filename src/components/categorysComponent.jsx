import headphonesPng from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerPng from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesPng from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { ButtonSkeleton } from "./buttons";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";

const CategorysComponent = () => {
  const navigate = useNavigate();

  const clickhandler = (e) => {
    navigate("/category", { state: e.target.id });
  };

  return (
    <Fragment>
      <section className="mb-[120px] flex w-full flex-col justify-center gap-[10px] md:flex-row xl:justify-between  ">
        <div className="relative  mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey pt-[88px] md:w-[223] md:h-[165px] xl:w-[350px] xl:h-[204px]">
          <img src={headphonesPng} className="absolute top-[-50px] w-[130px] xl:w-[200px] xl:top-[-85px]" />
          <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
            HEADPHONES
          </h2>
          <button
            id="headphones"
            onClick={clickhandler}
            className="bg-tranparent h-[48px] w-[160px] text-black opacity-50   hover:text-lightOrange "
          >
            {" "}
            SHOP <img src={arrow} className="ml-[13px] inline-block" />{" "}
          </button>
        </div>
        <div className="relative  mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey  pt-[88px]  md:w-[223] md:h-[165px] xl:w-[350px] xl:h-[204px]">
          <img src={speakerPng} className="absolute top-[-50px] w-[130px]  xl:w-[200px]  xl:top-[-80px]" />
          <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
            HEADPHONES
          </h2>
          <button
            id="speakers"
            onClick={clickhandler}
            className="bg-tranparent h-[48px] w-[160px] text-black opacity-50   hover:text-lightOrange "
          >
            {" "}
            SHOP <img src={arrow} className="ml-[13px] inline-block" />{" "}
          </button>
        </div>
        <div className="relative  mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey  pt-[88px]  md:w-[223] md:h-[165px] xl:w-[350px] xl:h-[204px]">
          <img src={earphonesPng} className="absolute top-[-37px] w-[150px]  xl:w-[200px]  xl:top-[-60px]" />
          <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
            HEADPHONES
          </h2>
          <button
            id="earphones"
            onClick={clickhandler}
            className="bg-tranparent h-[48px] w-[160px] text-black opacity-50   hover:text-lightOrange "
          >
            {" "}
            SHOP <img src={arrow} className="ml-[13px] inline-block" />{" "}
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default CategorysComponent;
