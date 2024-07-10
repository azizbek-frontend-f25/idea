import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import { HiOutlineTrash } from "react-icons/hi2";

const BasketCard = ({ item }) => {
  const [num, setNum] = useState(1);
  const { delProduct } = useContext(BasketContext);

  const onMinus = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  const onPlus = () => {
    if (num < 30) {
      setNum(num + 1);
    }
  };
  return (
    <div>
      <div className="">
        <div className="px-10 bg-white py-5 flex flex-col lg:flex-row border-b border-gray-100 gap-y-4 justify-between">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex w-full justify-center">
              <img
                className="h-[140px] w-[120px] px-[10px] object-cover"
                src={item.img}
                alt={item.title}
              />
              <div className="flex flex-col justify-center gap-2 py-[10px]">
                <b className="text-xl">
                  {parseInt(item.price).toLocaleString("ru")} so'm
                </b>
                <div className="flex gap-6">
                  <p className="text-[17px] w-max">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={() => delProduct(item.id)}>
              <HiOutlineTrash size={25} className="mr-6" />
            </button>
            <div className="py-1 h-10 w-[110px] items-center gap-5 px-1 flex justify-between">
              <button
                onClick={onMinus}
                className="bg-gray-100 px-3 py-1 rounded-md"
              >
                -
              </button>
              <p>{num}</p>
              <button
                onClick={onPlus}
                className="bg-gray-100 px-3 py-1 rounded-md"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
