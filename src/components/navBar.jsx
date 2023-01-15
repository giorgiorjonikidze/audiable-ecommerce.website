import { Fragment, useState, useEffect } from "react";
import sandWich from "../assets/Groupsandwich.svg";
import logo from "../assets/audiophile.svg";
import cartIcon from "../assets/cart-icon.svg";
import CartCard from "./cartCard";
import { Link, useNavigate } from "react-router-dom";
import headphonesPng from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerPng from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesPng from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "../assets/arrow.svg";

const Navbar = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [showCategorys, setShowCategorys] = useState(false);
  const navigate = useNavigate();

  const showCart = () => {
    setCartIsVisible(true);
  };
  const closeCartHandler = () => {
    setCartIsVisible(false);
  };

  const goHomeHandler = () => {
    navigate("/");
  };

  const sandwichHandler = () => {
    setShowCategorys(!showCategorys);
  };

  const clickhandler = (e) => {
    navigate("/category", { state: e.target.id });
  };

  const navButtonHandler = (e) => {
    navigate("/category", { state: e });
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize.innerWidth < 380) {
    console.log("mobile");
  }
  // tablet
  if (windowSize.innerWidth > 380 && windowSize.innerWidth < 780) {
    console.log("tab");
  }
  // desktop
  const Navigation = () => {
    if (windowSize.innerWidth > 1400) {
      return (
        <>
          <div className="mx-[42px] flex w-full items-center justify-center md:justify-start xl:mx-0 xl:w-fit ">
            <img onClick={goHomeHandler} src={logo} className="w-[143px] " />
          </div>
          <div className=" flex flex-col items-center gap-[16px] text-[13px] tracking-[2px] text-white md:flex-row md:gap-[35px]">
            <Link to={"/"}>HOME</Link>
            <button onClick={() => navButtonHandler("headphones")}>HEADPHONES</button>
            <button onClick={() => navButtonHandler("speakers")}>SPEAKERS</button>
            <button onClick={() => navButtonHandler("earphones")}>EARPHONES</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <img onClick={sandwichHandler} src={sandWich} className="w-[15px]" />
          <div className="mx-[42px] flex w-full items-center justify-center md:justify-start ">
            <img onClick={goHomeHandler} src={logo} className="w-[143px]" />
          </div>
        </>
      );
    }
  };

  return (
    <Fragment>
      <div className="relative flex h-[90px] w-screen  bg-black">
        <div className="mx-[24px] flex w-full items-center justify-between xl:mx-[165px]">
          <Navigation />
          <img
            onClick={showCart}
            src={cartIcon}
            className="h-[25px] w-[23px] cursor-pointer"
          />
        </div>
      </div>
      {cartIsVisible && <CartCard closeCart={closeCartHandler} />}
      {showCategorys && (
        <div>
          <div className="backdrop"></div>
          <div className="modal_category absolute z-50 rounded-b-[8px] bg-white">
            <section className="mb-[120px] flex flex-col">
              <div className="relative mx-[24px] mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey pt-[88px] ">
                <img
                  src={headphonesPng}
                  className="absolute top-[-50px] w-[130px]"
                />
                <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
                  HEADPHONES
                </h2>
                <button
                  id="headphones"
                  onClick={clickhandler}
                  className="bg-tranparent h-[48px] w-[160px] text-black opacity-50   hover:text-lightOrange "
                >
                  {" "}
                  SHOP <img
                    src={arrow}
                    className="ml-[13px] inline-block"
                  />{" "}
                </button>
              </div>
              <div className="relative mx-[24px] mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey  pt-[88px]">
                <img
                  src={speakerPng}
                  className="absolute top-[-50px] w-[130px]"
                />
                <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
                  HEADPHONES
                </h2>
                <button
                  id="speakers"
                  onClick={clickhandler}
                  className="bg-tranparent h-[48px] w-[160px] text-black opacity-50   hover:text-lightOrange "
                >
                  {" "}
                  SHOP <img
                    src={arrow}
                    className="ml-[13px] inline-block"
                  />{" "}
                </button>
              </div>
              <div className="relative mx-[24px] mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey  pt-[88px]">
                <img
                  src={earphonesPng}
                  className="absolute top-[-37px] w-[150px]"
                />
                <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
                  HEADPHONES
                </h2>
                <button
                  id="earphones"
                  onClick={clickhandler}
                  className="bg-tranparent h-[48px] w-[160px] text-black opacity-50   hover:text-lightOrange "
                >
                  {" "}
                  SHOP <img
                    src={arrow}
                    className="ml-[13px] inline-block"
                  />{" "}
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
