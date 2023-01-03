import { Fragment } from "react";
import sandWich from "../assets/Groupsandwich.svg";
import logo from "../assets/audiophile.svg";
import cartIcon from "../assets/cart-icon.svg";

const Navbar = () => {
  return (
    <div className="flex h-[90px] w-screen justify-between bg-black px-6">
      <img src={sandWich} className="w-[15px]" />
      <img src={logo} className="w-[143px]" />
      <img src={cartIcon} className="w-[23px]" />
    </div>
  );
};

export default Navbar;
