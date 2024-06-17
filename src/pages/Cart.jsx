import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cartitem from "../components/Cartitem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="max-w-6xl p-6 mx-auto mt-10 min-h-[80vh] flex gap-8">
          <div className="flex-1 space-y-4">
            {cart.map((item, index) => (
              <Cartitem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="w-full flex flex-col justify-between  max-w-sm p-6">


           <div>
           <div className="mb-4">
              <h2 className="text-xl font-semibold text-green-700 ">YOUR CART</h2>
              <h3 className="text-4xl font-bold text-green-700">SUMMARY</h3>
            </div>
            <p className="text-lg">
              <span className="font-semibold">Total Items: {cart.length}</span> 
            </p>
           </div>


            <div>
              <div className="flex gap-1">
              <p className="mt-2 text-md font-semibold ">
              Total Amount : 
            </p>
            <p className="mt-2 text-md font-bold">${totalAmount.toFixed(2)}</p>
              </div>
            <button className="w-full py-2 mt-4 text-white bg-green-700 rounded">
              Checkout Now
            </button>
            </div>
            


          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="mb-4 text-2xl font-semibold">Cart Empty</h1>
          <Link to="/">
            <button className="px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
