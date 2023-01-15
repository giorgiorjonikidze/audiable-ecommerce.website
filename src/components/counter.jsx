import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./../store/store";

const Counter = ({ id, count, value }) => {
  const items = useSelector((state) => state.items);
  const index = items.findIndex((item) => item.id === id);

  const [number, setNumber] = useState(1);

  useEffect(() => {setNumber(value)},[value])

  useEffect(() => {
    if (index === -1) {
      console.log(index, "if shi shevida");
      return;
    } else {
      setNumber(items[index].quantity);
      console.log(index, items, "elsshi shevida");
    }
  }, []);

  const addHandler = () => {
    setNumber((prevCount) => prevCount + 1);

    count(number + 1);
  };
  const removeHandler = () => {
    if (number === 1) {
      return;
    }
    setNumber((prevCount) => prevCount - 1);
    count(number - 1);
  };
  return (
    <div className="flex h-[48px] w-[120px] items-center justify-center bg-grey">
      <div
        onClick={removeHandler}
        className="cursor-pointer opacity-25 hover:text-orange  hover:opacity-100 "
      >
        -
      </div>
      <div className="mx-[20px] text-[13px] font-bold">{number}</div>
      <div
        onClick={addHandler}
        className="cursor-pointer opacity-25 hover:text-orange hover:opacity-100 "
      >
        +
      </div>
    </div>
  );
};

export default Counter;
