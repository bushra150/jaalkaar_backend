import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ShopContext); // Removed delivery_fee

  return (
    <div className="w-full">
      <div className="text-xl sm:text-2xl bg-[#800020] p-4">
        <h1 className="prata-regular text-[#D4AF37]">CART TOTAL</h1>
      </div>
      <div className="flex flex-col gap-2 mt-2 font-light text-lg p-4">
        <hr />
        <div className="flex justify-between">
          <b>Estimated total: </b>
          <b>
            {currency} {getCartAmount()}.00
          </b>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartTotal;
