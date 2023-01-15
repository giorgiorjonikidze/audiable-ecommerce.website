import ButtonOrange from "./buttons";
import CartItem from "./cartItem";
import { useSelector,useDispatch } from "react-redux";
import { Fragment } from "react";
import { cartActions } from './../store/store';
import { useNavigate } from 'react-router-dom';

const CartCard = ({ closeCart }) => {
  const items = useSelector((state) => state.items);
  const itemsTotalQuantity = useSelector((state) => state.totalQuantity);
  const itemsTotalPrice = useSelector((state) => state.totalPrice);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const removeAllHanler = () => {
    dispatch(cartActions.removeAll())
  }
  
  const backdropClick = () => {
    closeCart();
  };

  const checkoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <Fragment>
      <div onClick={backdropClick} className="backdrop"></div>
      <div className="modal box-border w-[327px] rounded-[8px] px-[28px] py-[32px] xl:w-[377px] xl:right-[-165px]">
        <div className="mb-[32px] flex justify-between">
          <p className="text-[18px] font-bold tracking-[1.3px]">Cart({itemsTotalQuantity})</p>
          <button onClick={removeAllHanler} className="text-[15px] font-medium opacity-50">Remove All</button>
        </div>
        {items.map((item) => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity} />
        ))}

        <div className="mb-[32px] flex justify-between">
          <p className="text-[15px] font-medium uppercase opacity-50">total</p>
          <p className="text-[18px] font-bold tracking-[1.3px]">$ {itemsTotalPrice}</p>
        </div>
        <button onClick={checkoutHandler} className="h-[48px] w-full bg-orange text-white hover:bg-lightOrange">
          CHECKOUT
        </button>
      </div>
    </Fragment>
  );
};

export default CartCard;
