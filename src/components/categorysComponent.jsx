import headphonesPng from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerPng from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesPng from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { ButtonSkeleton } from "./buttons";

import { Fragment } from "react";

const CategorysComponent = () => {
    return (
        <Fragment>
            <section className="mb-[120px] flex flex-col">
        <div className="relative mx-[24px] mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey pt-[88px] ">
          <img src={headphonesPng} className="absolute top-[-50px] w-[130px]" />
          <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
            HEADPHONES
          </h2>
          <ButtonSkeleton>SHOP</ButtonSkeleton>
        </div>
        <div className="relative mx-[24px] mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey  pt-[88px]">
          <img src={speakerPng} className="absolute top-[-50px] w-[130px]" />
          <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
            HEADPHONES
          </h2>
          <ButtonSkeleton>SHOP</ButtonSkeleton>
        </div>
        <div className="relative mx-[24px] mt-[68px] box-border flex h-[165px] w-[327px] flex-col items-center rounded-[8px] bg-grey  pt-[88px]">
          <img src={earphonesPng} className="absolute top-[-37px] w-[150px]" />
          <h2 className="tetx-[15px] font-bold tracking-[1.07px]">
            HEADPHONES
          </h2>
          <ButtonSkeleton>SHOP</ButtonSkeleton>
        </div>
      </section>
        </Fragment>
    );
}
 
export default CategorysComponent;