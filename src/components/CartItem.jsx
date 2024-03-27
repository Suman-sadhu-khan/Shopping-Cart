
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="box-border flex items-center p-2 p-5 justify-between   mt-4 mb-2 mx-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded " >
      <div className="flex box-border flex-col sm:flex-col md:flex-row p-0 p-3 gap-3 items-center">

        <div className="w-[30%]">
          <img src={item.image} className="object-cover min-h-[125px] min-w-[110px]"/>
        </div>
        <div className="flex flex-col ">
            <div className="md:ml-10  self-start space-y-5 w-[90%] sm:w-[70%] md:w-[70%]">
          <h1  className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
        </div>

        <div className="flex items-center justify-between px-20 mt-4 gap-7">
          <p className="font-bold text-lg text-green-600">${item.price}</p>
          <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3 " onClick={removeFromCart}>
            <AiFillDelete/>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
