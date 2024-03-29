import React from "react";
import { BiPlus } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../../../actions/cartActions";

const ProductAddtoCart = ({ stock, id, quantity }) => {

  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(addCartItem(id, quantity))
  }
  return (
    <>
      <div className="sticky bottom-0  bg-white  md:static flex gap-x-3 md:gap-x-14  mt-3 pt-2 px-5 md:px-10 lg:px-0  md:pt-0    md:mt-8 border-t-8 border-[#f5f5f5] md:border-none">
        <button onClick={handleOnClick} type="button" disabled={stock === 0 ? true : false} className="bg-slate-800 my-1 font-medium text-white flex w-1/2 md:w-2/6 justify-center py-3 items-center rounded-lg text-center">
          <div>
            <BiPlus className=" text-2xl mr-2" />
          </div>
          <div className="text-sm md:text-base">
            Add To Cart
          </div>
        </button>

        <button className="border-2 my-1 border-slate-800 font-medium  flex w-1/2 md:w-2/6 justify-center py-3 items-center rounded-lg text-center">
          <div>
            <AiOutlineHeart className="text-2xl mr-2 text-rose-500" />
          </div>
          <div className="text-sm md:text-base">
            <span className="hidden md:inline-block">Add To</span> Wishlist
          </div>
        </button>

      </div>
    </>
  );
};

export default ProductAddtoCart;
