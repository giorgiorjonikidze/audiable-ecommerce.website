import Navbar from "../components/navBar";
import headerImage from "../assets/home/mobile/image-header.jpg";
import ButtonOrange, {
  ButtonBlack,
  ButtonSkeleton,
  ButtonWhite,
} from "../components/buttons";
import logo from "../assets/audiophile.svg";

import speakerOrange from "../assets/home/mobile/image-speaker-zx9.png";
import halfSpeaker from "../assets/home/mobile/image-speaker-zx7.jpg";
import earphoneBlack from "../assets/home/mobile/image-earphones-yx1.jpg";

import CategorysComponent from './../components/categorysComponent';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className="relative h-full">
        <img src={headerImage} className="" />
        <div className="absolute top-0 mt-[108px] flex w-screen flex-col items-center justify-center text-white">
          <p className="mb-[16px] text-[14px] tracking-[10px] opacity-50">
            NEW PRODUCT
          </p>
          <h1 className="mb-[24px] w-[233px] text-[36px] font-bold leading-[40px] tracking-[1.3px]">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="mb-[28px] w-[300px] text-center text-[15px] font-medium opacity-50">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonOrange>SEE PRODUCT</ButtonOrange>
        </div>
      </section>
      <CategorysComponent />
      <section className="relative mx-[24px] mb-[24px] box-border h-[600px] rounded-[8px] bg-orange py-[55px]">
        <div className="flex w-full flex-col items-center ">
          <img src={speakerOrange} className="mb-[32px] w-[160px]" />
          <h3 className="mb-[24px] w-[170px] text-center text-[36px] font-bold tracking-[1.3px] text-white">
            ZX9 SPEAKER
          </h3>
          <p className="mb-[24px] w-[280px] text-center text-[15px] font-medium text-white opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonBlack>SEE PRODUCT</ButtonBlack>
        </div>
        <div className="absolute top-[10px] left-[27px] h-[279px] w-[279px] rounded-full border-[1px] border-white opacity-40"></div>
        <div className="absolute top-[-10px] left-[5px] h-[320px] w-[320px] rounded-full border-[1px] border-white opacity-40"></div>
        <div className="absolute left-[-115px] top-[-100px] h-[558px] w-[558px] rounded-full border-[1px] border-white opacity-40"></div>
      </section>
      <section className="relative mx-[24px] mb-[24px]">
        <img src={halfSpeaker} className="w-[327px] rounded-[8px]" />
        <div className="absolute top-[90px] left-[25px] flex flex-col">
          <h4 className="mb-[32px] text-[28px] font-bold tracking-[2px]">
            ZX7 SPEAKER
          </h4>
          <ButtonWhite>SEE PRODUCT</ButtonWhite>
        </div>
      </section>
      <section className="mb-[120px]">
        <img
          src={earphoneBlack}
          className="mx-[24px] mb-[24px] w-[327px] rounded-[8px]"
        />
        <div className="mx-[24px] box-border flex h-[200px] w-[327px] flex-col rounded-[8px] bg-grey px-[24px] pt-[41px]">
          <h5 className="mb-[32px] text-[28px] font-bold">YX1 EARPHONES</h5>
          <ButtonWhite>SEE PRODUCT</ButtonWhite>
        </div>
      </section>
      
    </div>
  );
};

export default Landing;
