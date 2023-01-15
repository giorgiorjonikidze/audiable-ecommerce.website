import arrow from "../assets/arrow.svg";

const ButtonOrange = ({ children }) => {
  return (
    <button className="h-[48px] w-[160px] bg-orange text-white hover:bg-lightOrange">
      {children}
    </button>
  );
};

export const ButtonWhite = ({ children }) => {
  return (
    <button className="h-[48px] w-[160px] border-[1px] border-solid border-black bg-white text-black hover:border-0  hover:bg-black hover:text-white ">
      {children}
    </button>
  );
};

export const ButtonBlack = ({ children }) => {
  return (
    <button className="h-[48px] w-[160px] bg-black text-[13px]  tracking-[1px]  text-white hover:bg-white hover:text-black">
      {children}
    </button>
  );
};

export const ButtonSkeleton = ({ children }) => {
  
    return (
      <button
        
        className="bg-tranparent h-[48px] w-[160px] text-black opacity-50   hover:text-lightOrange "
      >
        {" "}
        {children} <img src={arrow} className="ml-[13px] inline-block" />{" "}
      </button>
    );
  };


export default ButtonOrange;
