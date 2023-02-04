import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const entireHouseContext = createContext();

export const EntireHouseContextProvider = function ({ children }) {
  const [entireHouseName, onChangeEntireHouseName, onResetEntireHouseName] =
    useInput("Entire House");
  const [entireHousePrice, onChangeEntireHousePrice, onResetEntireHousePrice] =
    useInput((Math.random() * 20 + 200).toFixed(2));
  const [
    entireHouseQuantity,
    onChangeEntireHouseQuantity,
    onResetEntireHouseQuantity,
  ] = useInput(1);
  const [entireHouseBeds, onChangeEntireHouseBeds, onResetEntireHouseBeds] =
    useInput("A whole house to your use");
  const [
    entireHouseSleeps,
    onChangeEntireHouseSleeps,
    onResetEntireHouseSleeps,
  ] = useInput(Math.ceil(Math.random() * 7) + 9);
  const [entireHouseType, onChangeEntireHouseType, onResetEntireHouseType] =
    useInput("entire");

  const [entireHouseImage, onChangeEntireHouseImage, onResetEntireHouseImage] =
    useInput("");

  return (
    <entireHouseContext.Provider
      value={{
        entireHouseName: [
          entireHouseName,
          onChangeEntireHouseName,
          onResetEntireHouseName,
        ],
        entireHousePrice: [
          entireHousePrice,
          onChangeEntireHousePrice,
          onResetEntireHousePrice,
        ],
        entireHouseQuantity: [
          entireHouseQuantity,
          onChangeEntireHouseQuantity,
          onResetEntireHouseQuantity,
        ],
        entireHouseBed: [
          entireHouseBeds,
          onChangeEntireHouseBeds,
          onResetEntireHouseBeds,
        ],
        entireHouseSleeps: [
          entireHouseSleeps,
          onChangeEntireHouseSleeps,
          onResetEntireHouseSleeps,
        ],
        entireHouseType: [
          entireHouseType,
          onChangeEntireHouseType,
          onResetEntireHouseType,
        ],

        entireHouseImage: [
          entireHouseImage,
          onChangeEntireHouseImage,
          onResetEntireHouseImage,
        ],
      }}
    >
      {children}
    </entireHouseContext.Provider>
  );
};

export default entireHouseContext;
