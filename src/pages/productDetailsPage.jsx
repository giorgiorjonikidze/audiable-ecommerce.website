import { Fragment } from "react";
import ButtonOrange from "../components/buttons";
import CategorysComponent from "../components/categorysComponent";
import Counter from "../components/counter";
import Footer from "../components/footer";
import RecomendedItem from "../components/recomendedItem";
import Navbar from "./../components/navBar";
import data from "./../store/data";

const ProductDetails = () => {
  return (
    <Fragment>
      <Navbar/>
      <button className="mx-[24px] mt-[16px] mb-[24px] text-[15px] font-medium opacity-50">
        Go Back
      </button>
      <div className="mx-[24px]  w-[327px] ">
        <img
          src={process.env.PUBLIC_URL + data[0].image.mobile}
          className="mb-[24px] rounded-[8px]"
        />
        <div className="flex flex-col">
          <p className="mb-[24px] text-[14px] tracking-[10px] text-orange">
            NEW PRODUCT
          </p>
          <h1 className="mb-[24px] text-[28px] font-bold tracking-[1px]">
            {data[0].name}
          </h1>
          <p className="mb-[24px] text-[15px] font-medium opacity-50">
            {data[0].description}
          </p>
          <p className="mb-[31px] text-[18px] font-bold tracking-[1.3px]">
            {"$ " + data[0].price}
          </p>
          <div className="mb-[88px] flex gap-[16px]">
            <Counter number={1} />
            <ButtonOrange>ADD TO CART</ButtonOrange>
          </div>
        </div>
      </div>
      <div className="mx-[24px] mb-[88px]">
        <h2 className="mb-[24px] text-[24px] font-bold tracking-[0.86px]">
          FEATURES
        </h2>
        <p className=" text-[15px] font-medium opacity-50">
          {data[0].features}
        </p>
      </div>
      <div className="mx-[24px] mb-[88px]">
        <p className="mb-[24px] text-[24px] font-bold uppercase tracking-[0.9px] ">
          in the box
        </p>
        <div className="">
          <div className="mb-[8px] flex gap-[24px]">
            <p className="text-[15px] font-bold text-orange">
              {data[0].includes[0].quantity + "x"}
            </p>
            <p className="text-[15px] font-medium opacity-50">
              {data[0].includes[0].item}
            </p>
          </div>
          <div className="mb-[8px] flex gap-[24px]">
            <p className="text-[15px] font-bold text-orange">
              {data[0].includes[1].quantity + "x"}
            </p>
            <p className="text-[15px] font-medium opacity-50">
              {data[0].includes[1].item}
            </p>
          </div>
          <div className="mb-[8px] flex gap-[24px]">
            <p className="text-[15px] font-bold text-orange">
              {data[0].includes[2].quantity + "x"}
            </p>
            <p className="text-[15px] font-medium opacity-50">
              {data[0].includes[2].item}
            </p>
          </div>
          <div className="mb-[8px] flex gap-[24px]">
            <p className="text-[15px] font-bold text-orange">
              {data[0].includes[3].quantity + "x"}
            </p>
            <p className="text-[15px] font-medium opacity-50">
              {data[0].includes[3].item}
            </p>
          </div>
          <div className="mb-[8px] flex gap-[24px]">
            <p className="text-[15px] font-bold text-orange">
              {data[0].includes[4].quantity + "x"}
            </p>
            <p className="text-[15px] font-medium opacity-50">
              {data[0].includes[4].item}
            </p>
          </div>
        </div>
      </div>
      {/* images  */}
      <div className="mx-[24px] mb-[120px] flex flex-col gap-[24px]">
        <img
          src={process.env.PUBLIC_URL + data[0].gallery.first.mobile}
          className="rounded-[8px] "
        />
        <img
          src={process.env.PUBLIC_URL + data[0].gallery.second.mobile}
          className="rounded-[8px]"
        />
        <img
          src={process.env.PUBLIC_URL + data[0].gallery.third.mobile}
          className="rounded-[8px]"
        />
      </div>
      <RecomendedItem />
      <CategorysComponent />
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
