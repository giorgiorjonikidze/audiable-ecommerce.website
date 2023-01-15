import Counter from "./counter";
import data from "./../store/data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { cartActions } from "../store/store";

const CartItem = ({ id, quantity }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "http://localhost:3000/";

  const [counterValue, setCounterValue] = useState(quantity);
  const dispatch = useDispatch();

//   useEffect(() => {}, [])


  
  const addHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        newItemId: id,
        quantity: 1,
      })
    );

    setCounterValue(counterValue + 1);
  };
  const removeHandler = () => {
    // if (counterValue === 1) {
    //   return;
    // }
    setCounterValue(counterValue - 1);
    dispatch(
        cartActions.removeItemFromCart({
          id: id,
          quantity: 1,
        })
      );
  };

  return (
    <div className="mb-[24px]  flex w-full">
      <div className="mr-[16px] h-[64px] w-[64px] rounded-[8px] bg-grey">
        <img src={env.PUBLIC_URL + data[id].image.mobile} alt="" />
      </div>
      <div className="mr-[20px]">
        <p className="text-[15px] font-bold">{data[id].name}</p>
        <p className="text-[15px] font-bold opacity-50">{data[id].price}</p>
      </div>
      {/* <Counter value={quantity} /> */}
      <div className="flex h-[48px] w-[120px] items-center justify-center bg-grey">
        <div
          onClick={removeHandler}
          className="cursor-pointer opacity-25 hover:text-orange  hover:opacity-100 "
        >
          -
        </div>
        <div className="mx-[20px] text-[13px] font-bold">{quantity}</div>
        <div
          onClick={addHandler}
          className="cursor-pointer opacity-25 hover:text-orange hover:opacity-100 "
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItem;
