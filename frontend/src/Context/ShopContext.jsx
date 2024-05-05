import React from "react";
import { createContext } from "react";
import all_product from "../Components/Assets/all_product"

 const ShopContext = createContext(null)

const ShopContextProvider  = (props)=>{
    const value = {all_product};
  return (
    <MyContext.Provider value={value}>
      {props.children}
    </MyContext.Provider>
  );
}
export {ShopContext ,ShopContextProvider}