import { useNavigate } from "react-router-dom";
import data from "./../store/data";
import { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import Footer from "../components/footer";
import ButtonOrange, {
  ButtonBlack,
  ButtonSkeleton,
  ButtonWhite,
} from "../components/buttons";

import headerImage from "../assets/home/mobile/image-header.jpg";
import headerImageTab from "../assets/home/tablet/image-header.jpg";
import headerImageDesk from "../assets/home/desktop/image-hero.jpg";

import speakerOrange from "../assets/home/mobile/image-speaker-zx9.png";
import speakerOrangeTab from "../assets/home/tablet/image-speaker-zx9.png";
import speakerOrangeDesk from "../assets/home/desktop/image-speaker-zx9.png";

import halfSpeaker from "../assets/home/mobile/image-speaker-zx7.jpg";
import halfSpeakerTab from "../assets/home/tablet/image-speaker-zx7.jpg";
import halfSpeakerDesk from "../assets/home/desktop/image-speaker-zx7.jpg";

import earphoneBlack from "../assets/home/mobile/image-earphones-yx1.jpg";
import earphoneBlackTab from "../assets/home/tablet/image-earphones-yx1.jpg";
import earphoneBlackDesk from "../assets/home/desktop/image-earphones-yx1.jpg";

import CategorysComponent from "./../components/categorysComponent";

const Landing = () => {
  const navigate = useNavigate();
  const seeMainProductHandler = () => {
    navigate("/details/" + data[3].slug, { state: { id: 3 } });
  };

  return (
    <div>
      <Navbar />
      {/* didi suratis div  */}
      <picture>
        <source media="(min-width: 1400px)" srcSet={headerImageDesk} />
        <source media="(min-width: 760px)" srcSet={headerImageTab} />
        <img
          src={headerImage}
          id="main-image"
          className="relative w-full md:mb-[80px]"
        />{" "}
      </picture>
      {/* did suratshi ro teqstia  */}
      <div className="px-[24px] xl:px-[165px]">
        <section className="xl:absolute top-0 mt-[108px] md:flex md:justify-center h-full w-[90%]">
          <div className="mt-[108px] flex ml-[20px] xl:ml-0 md:ml-[70px] absolute top-[126px] flex-col items-center justify-center text-white xl:mt-[128px]  xl:items-start  xl:top-0 xl:left-0">
            <p className="mb-[16px] text-[14px] tracking-[10px] opacity-50">
              NEW PRODUCT
            </p>
            <h1 className="mb-[24px] w-[233px] text-[36px] font-bold leading-[40px] tracking-[1.3px] md:w-[360px] md:text-[56px] md:leading-[58px] md:tracking-[2px] xl:top-0 xl:left-0">
              XX99 Mark II HeadphoneS
            </h1>
            <p className="mb-[28px] w-[300px] text-center text-[15px] font-medium opacity-50 xl:mb-[55px] xl:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              onClick={seeMainProductHandler}
              className="h-[48px] w-[160px] bg-orange text-white hover:bg-lightOrange"
            >
              SEE PRODUCT
            </button>
          </div>
        </section>
        <CategorysComponent />
        <section className="relative h-[600px]  mb-[24px] box-border  rounded-[8px] bg-orange py-[55px]">
          <div className="flex w-full flex-col items-center xl:h-[560px]">
            <picture className="xl:absolute">
              <source media="(min-width: 1400px)" srcSet={speakerOrangeDesk} />
              <source media="(min-width: 760px)" srcSet={speakerOrangeTab} />
              <img
                src={speakerOrange}
                className="z-3 mb-[32px] w-[160px]  md:w-[200px] xl:relative xl:top-[48px] xl:left-[-240px] xl:w-[410px]"
              />
            </picture>
            <div className="flex  flex-col items-center xl:absolute xl:left-[660px] xl:top-[133px]">
              <h3 className="mb-[24px] w-[170px] text-center text-[36px] font-bold tracking-[1.3px] text-white md:w-[261px] md:text-[56px]">
                ZX9 SPEAKER
              </h3>
              <p className=" w-[280px] text-center text-[15px] font-medium text-white opacity-75 md:mb-[40px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ButtonBlack>SEE PRODUCT</ButtonBlack>
            </div>
          </div>
          <div className="absolute top-[10px] left-[27px] h-[279px] w-[279px] rounded-full border-[1px] border-white opacity-40 md:top-[-17px] md:left-[110px] md:h-[472px] md:w-[472px] xl:top-[147px]"></div>
          <div className="absolute top-[-10px] left-[5px] h-[320px] w-[320px] rounded-full border-[1px] border-white opacity-40 md:top-[-56px] md:left-[77px] md:h-[543px] md:w-[542px] xl:top-[114px]"></div>
          {/* <div className="absolute left-[-115px] top-[-100px] h-[558px] w-[558px] rounded-full border-[1px] border-white opacity-40 "></div> */}
        </section>
        <section className="relative  mb-[24px]">
          <picture>
            <source media="(min-width: 1400px)" srcSet={halfSpeakerDesk} />
            <source media="(min-width: 760px)" srcSet={halfSpeakerTab} />

            <img
              src={halfSpeaker}
              className="w-[327px] rounded-[8px] md:w-full"
            />
          </picture>
          <div className="absolute top-[90px] left-[25px] flex flex-col md:left-[62px]">
            <h4 className="mb-[32px] text-[28px] font-bold tracking-[2px]">
              ZX7 SPEAKER
            </h4>
            <ButtonWhite>SEE PRODUCT</ButtonWhite>
          </div>
        </section>
        <section className="mb-[120px] flex flex-col md:mb-[80px] md:flex-row md:justify-between">
          <picture>
            <source media="(min-width: 1400px)" srcSet={earphoneBlackDesk} />
            <source media="(min-width: 760px)" srcSet={earphoneBlackTab} />
            <img
              src={earphoneBlack}
              className=" mb-[24px] w-[327px] rounded-[8px] md:w-[339px] xl:w-full"
            />
          </picture>
          <div className=" box-border flex h-[200px] w-[327px] flex-col rounded-[8px] bg-grey px-[24px] pt-[41px] md:h-[320px] md:w-[350px] md:items-center md:justify-center md:pt-0 xl:w-[590px] xl:h-[320px]">
            <h5 className="mb-[32px] text-[28px] font-bold">YX1 EARPHONES</h5>
            <ButtonWhite>SEE PRODUCT</ButtonWhite>
          </div>
        </section>
      </div>
      <Footer />
      
    </div>
  );
};

export default Landing;
