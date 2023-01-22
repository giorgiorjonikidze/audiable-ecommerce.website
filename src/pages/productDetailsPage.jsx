import { Fragment, useState } from "react";
import ButtonOrange from "../components/buttons";
import CategorysComponent from "../components/categorysComponent";
import Counter from "../components/counter";
import Footer from "../components/footer";
import RecomendedItem from "../components/recomendedItem";
import Navbar from "./../components/navBar";
import data from "./../store/data";
import CartCard from "./../components/cartCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./../store/store";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productId = location.state.id;
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "http://localhost:3000/";

  const [counterValue, setCounterValue] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const buttonClickHandler = (name) => {
    const index = data.findIndex((obj) => obj.slug === name);
    navigate("/details/" + data[index].slug, { state: { id: index } });
    setCounterValue(1);
  };
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        newItemId: productId,
        quantity: counterValue,
      })
    );
  };
  console.log(counterValue);

  const addHandler = () => {
    setCounterValue(counterValue + 1);
  };
  const removeHandler = () => {
    if (counterValue === 1) {
      return;
    }
    setCounterValue(counterValue - 1);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="md:px-[16px] xl:px-[141px]">
        <button
          onClick={() => navigate(-1)}
          className="mx-[24px] mt-[16px] mb-[24px] text-[15px] font-medium opacity-50 xl:mb-[56px] xl:mt-[80px]"
        >
          Go Back
        </button>
        <div className="mx-[24px]  w-[327px] md:mb-[120px] md:flex md:w-auto md:items-center md:gap-[70px] xl:w-auto xl:gap-[145px]">
          <picture>
            <source
              media="(min-width: 1400px)"
              srcSet={env.PUBLIC_URL + data[productId].image.desktop}
            />
            <source
              media="(min-width: 760px)"
              srcSet={env.PUBLIC_URL + data[productId].image.tablet}
            />
            <img
              src={env.PUBLIC_URL + data[productId].image.mobile}
              className="mb-[24px] rounded-[8px] md:max-w-[280px]  xl:max-w-[560px]"
            />
          </picture>

          <div className="flex flex-col md:w-[340px]">
            {data[productId].new && (
              <p className="mb-[24px] text-[14px] tracking-[10px] text-orange">
                NEW PRODUCT
              </p>
            )}
            <h1 className="mb-[24px] text-[28px] font-bold tracking-[1px] xl:text-[40px]">
              {data[productId].name}
            </h1>
            <p className="mb-[24px] text-[15px] font-medium opacity-50 ">
              {data[productId].description}
            </p>
            <p className="mb-[31px] text-[18px] font-bold tracking-[1.3px]">
              {"$ " + data[productId].price}
            </p>
            <div className="mb-[88px] flex gap-[16px]">
              {/* ///////////////////////////////////////////////counter  */}
              <div className="flex h-[48px] w-[120px] items-center justify-center bg-grey">
                <div
                  onClick={removeHandler}
                  className="cursor-pointer opacity-25 hover:text-orange  hover:opacity-100 "
                >
                  -
                </div>
                <div className="mx-[20px] text-[13px] font-bold">
                  {counterValue}
                </div>
                <div
                  onClick={addHandler}
                  className="cursor-pointer opacity-25 hover:text-orange hover:opacity-100 "
                >
                  +
                </div>
              </div>
              {/* <Counter id={productId} count={countHandler} value={counterValue} /> */}
              <button
                onClick={addToCartHandler}
                className="h-[48px] w-[160px] bg-orange text-white hover:bg-lightOrange"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:gap-[125px] ">
          <div className="mx-[24px] mb-[88px]">
            <h2 className="mb-[24px] text-[24px] font-bold tracking-[0.86px] md:text-[32px]">
              FEATURES
            </h2>
            <p className=" text-[15px] font-medium opacity-50 xl:w-[635px]">
              {data[productId].features}
            </p>
          </div>
          <div className="mx-[24px] mb-[88px] md:flex xl:flex-col">
            <p className=" mb-[24px] text-[24px] font-bold uppercase tracking-[0.9px] md:mr-[150px] md:text-[32px] xl:mr-0 ">
              in the box
            </p>
            <div className="">
              <div className="mb-[8px] flex gap-[24px]">
                <p className="text-[15px] font-bold text-orange">
                  {data[productId].includes[0].quantity + "x"}
                </p>
                <p className="text-[15px] font-medium opacity-50">
                  {data[productId].includes[0].item}
                </p>
              </div>
              <div className="mb-[8px] flex gap-[24px]">
                <p className="text-[15px] font-bold text-orange">
                  {data[productId].includes[1].quantity + "x"}
                </p>
                <p className="text-[15px] font-medium opacity-50">
                  {data[productId].includes[1].item}
                </p>
              </div>
              <div className="mb-[8px] flex gap-[24px]">
                <p className="text-[15px] font-bold text-orange">
                  {data[productId].includes[2].quantity + "x"}
                </p>
                <p className="text-[15px] font-medium opacity-50">
                  {data[productId].includes[2].item}
                </p>
              </div>
              <div className="mb-[8px] flex gap-[24px]">
                <p className="text-[15px] font-bold text-orange">
                  {data[productId].includes[3].quantity + "x"}
                </p>
                <p className="text-[15px] font-medium opacity-50">
                  {data[productId].includes[3].item}
                </p>
              </div>
              {data[productId].includes[4] && (
                <div className="mb-[8px] flex gap-[24px]">
                  <p className="text-[15px] font-bold text-orange">
                    {data[productId].includes[4].quantity + "x"}
                  </p>
                  <p className="text-[15px] font-medium opacity-50">
                    {data[productId].includes[4].item}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* images  */}
        <div className="mx-[24px] mb-[120px] flex flex-col gap-[24px] md:flex-row xl:justify-center xl:gap-[30px]">
          <div className="md:flex md:flex-col">
            <picture>
              <source
                media="(min-width: 1400px)"
                srcSet={env.PUBLIC_URL + data[productId].gallery.first.desktop}
              />
              <source
                media="(min-width: 760px)"
                srcSet={env.PUBLIC_URL + data[productId].gallery.first.tablet}
              />
              <img
                src={env.PUBLIC_URL + data[productId].gallery.first.mobile}
                className="rounded-[8px] md:mb-[24px]"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 1400px)"
                srcSet={env.PUBLIC_URL + data[productId].gallery.second.desktop}
              />
              <source
                media="(min-width: 760px)"
                srcSet={env.PUBLIC_URL + data[productId].gallery.second.tablet}
              />

              <img
                src={env.PUBLIC_URL + data[productId].gallery.second.mobile}
                className="rounded-[8px]"
              />
            </picture>
          </div>
          <picture>
            <source
              media="(min-width: 1400px)"
              srcSet={env.PUBLIC_URL + data[productId].gallery.third.desktop}
            />
            <source
              media="(min-width: 760px)"
              srcSet={env.PUBLIC_URL + data[productId].gallery.third.tablet}
            />

            <img
              src={env.PUBLIC_URL + data[productId].gallery.third.mobile}
              className="rounded-[8px]"
            />
          </picture>
        </div>
        <RecomendedItem
          buttonClick={buttonClickHandler}
          productId={productId}
        />
        <CategorysComponent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
