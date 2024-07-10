import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext([]);

const BasketProvider = ({ children }) => {
  const getLocal = localStorage.getItem("product");
  const [num, setNum] = useState(1);
  const [basData, setBasData] = useState(JSON.parse(getLocal) || []);
  const addBas = (data) => {
    const find = basData.some((v) => v.id === data.id);
    if (!find) {
      setBasData([data,...basData]);
    }
  };

  useEffect(()=>{
    localStorage.setItem("product", JSON.stringify(basData || []));
  },[basData])

  const delProduct = (id) => {
    const newData = basData.filter((v)=>v.id !== id)
    setBasData(newData)
  }

  return (
    <BasketContext.Provider value={{ basData, addBas,delProduct,num,setNum }}>
      {children}
    </BasketContext.Provider>
  );
};
export default BasketProvider;
