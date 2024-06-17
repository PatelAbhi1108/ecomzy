import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

export default function Cartitem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (

    // main div

    <div className="flex items-center justify-between p-5 border-b-2 border-gray-700">

        {/* product image */}

      <img src={item.image} className="h-[180px]" alt={item.title} />


        {/* details div */}
      
        <div className="">

            <div className="flex flex-1 px-12  flex-col gap-8">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-md text-gray-700">
                {item.description.split(" ").slice(0, 15).join(" ") + "..."}
                </p>


                <div className="flex justify-between">
                    <p className="mt-2 text-xl font-bold text-green-600">${item.price}</p>
                    <button
                        onClick={removeFromCart}
                        className="p-3 text-red-700 bg-red-200 rounded-full hover:bg-red-500 hover:text-red-50">
                        <MdDelete size={15} />
                    </button>
                </div>
            </div>

        </div>

      
    </div>
  );
}
