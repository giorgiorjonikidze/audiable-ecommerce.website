import manHeadpones from "../assets/shared/mobile/image-best-gear.jpg";
import manHeadponesTab from "../assets/shared/tablet/image-best-gear.jpg";
import manHeadponesDesk from "../assets/shared/desktop/image-best-gear.jpg";

import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import logo from "../assets/audiophile.svg";

import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <section className="mb-[120px] box-border flex w-full flex-col items-center px-[24px] md:px-[40px] md:mb-[80px] xl:flex-row-reverse xl:justify-between xl:px-[165px]">
        <picture>
          <source media="(min-width: 1400px)" srcSet={manHeadponesDesk} />
          <source media="(min-width: 760px)" srcSet={manHeadponesTab} />

          <img
            src={manHeadpones}
            className="mb-[40px] h-[300px] rounded-[8px] object-cover md:h-auto"
          />
        </picture>
        <div className="flex flex-col justify-start">
          <h5 className="mb-[32px]  text-center  text-[28px] font-bold uppercase tracking-[1px] md:w-[570px] md:text-[40px] xl:text-left">
            Bringing you the <span className="text-orange ">best</span> audio
            gear
          </h5>
          <p className="text-center text-[15px] font-medium opacity-50 md:w-[570px] xl:w-[445px] xl:text-left">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
      <footer className="flex  flex-col items-center bg-black text-white md:items-start md:pl-[40px] xl:px-[165px]">
        <div className="mb-[48px] h-[4px] w-[101px] bg-orange"></div>
        <img src={logo} className="mb-[48px]" />
        <div className="mb-[48px] flex flex-col items-center gap-[16px] text-[13px] tracking-[2px] md:flex-row md:gap-[35px]">
          <p>Home</p>
          <p>HEADPHONES</p>
          <p>SPEAKERS</p>
          <p>EARPHONES</p>
        </div>
        <p className="mb-[48px] w-[327px] text-center text-[15px] font-medium tracking-[0.7px] opacity-50 md:w-[670px] md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex w-full flex-col items-center md:flex-row md:justify-between">
          <p className="mb-[48px] text-center text-[15px] font-medium opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="mb-[40px] mr-[40px] flex">
            <img src={facebook} className="w-[24px]" />
            <img src={twitter} className="mx-[16px] w-[24px]" />
            <img src={instagram} className="w-[24px] " />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
