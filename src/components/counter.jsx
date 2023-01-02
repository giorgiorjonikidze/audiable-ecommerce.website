const Counter = ({number}) => {
    return (
        <div className="flex w-[120px] h-[48px] bg-grey justify-center items-center">
            <div className="opacity-25 hover:text-orange cursor-pointer  hover:opacity-100 ">-</div>
            <div className="font-bold text-[13px] mx-[20px]">{number}</div>
            <div className="opacity-25 hover:text-orange cursor-pointer hover:opacity-100 ">+</div>
        </div>
    );
}
 
export default Counter;