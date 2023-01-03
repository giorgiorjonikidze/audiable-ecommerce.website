import manHeadpones from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import logo from "../assets/audiophile.svg";

import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <section className="mx-[24px] mb-[120px] box-border flex w-[327px] flex-col items-center">
        <img
          src={manHeadpones}
          className="mb-[40px] h-[300px] rounded-[8px] object-cover"
        />
        <h5 className="mb-[32px] w-[327px] text-[28px] font-bold tracking-[1px] text-center">
          Bringing you the <p className="text-orange">best</p> audio gear
        </h5>
        <p className="text-center text-[15px] font-medium opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>
      <footer className="flex w-[375px] flex-col items-center bg-black text-white">
        <div className="mb-[48px] h-[4px] w-[101px] bg-orange"></div>
        <img src={logo} className="mb-[48px]" />
        <div className="mb-[48px] flex flex-col items-center gap-[16px] text-[13px] tracking-[2px]">
          <p>Home</p>
          <p>HEADPHONES</p>
          <p>SPEAKERS</p>
          <p>EARPHONES</p>
        </div>
        <p className="mb-[48px] w-[327px] text-center text-[15px] font-medium opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="mb-[48px] text-center text-[15px] font-medium opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="mb-[40px] flex">
          <img src={facebook} alt="" />
          <img src={twitter} className="mx-[16px]" />
          <img src={instagram} alt="" />
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
