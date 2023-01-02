import arrow from "../assets/arrow.svg"

const ButtonOrange = ({children}) => {
    return (
        <button className="w-[160px] h-[48px] bg-orange text-white hover:bg-lightOrange">{children}</button>
    );
}

export const ButtonWhite = ({children}) => {
    return (
        <button className="w-[160px] h-[48px] bg-white text-black border-[1px] border-solid border-black hover:border-0  hover:text-white hover:bg-black ">{children}</button>
    );
}

export const ButtonSkeleton = ({children}) => {
    return (
        <button className="w-[160px] h-[48px] bg-white text-black opacity-50   hover:text-lightOrange "> {children} <img src={arrow} className="inline-block ml-[13px]"/> </button>
    );
}
 
export default ButtonOrange;