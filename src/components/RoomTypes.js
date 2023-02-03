import RoomTypeInfo from "./RoomTypeInfo";
import { useContext } from "react";
import room1Context from "../contexts/Room1InfoContext";
import room2Context from "../contexts/Room2InfoContext";
import entireHouseContext from "../contexts/EntireHouseInfoContext";

export default function RoomTypes() {
  const {
    room1Name: [room1Name, onChangeRoom1Name, onResetRoom1Name],
    room1Price: [room1Price, onChangeRoom1Price, onResetRoom1Price],
    room1Bed: [room1Beds, onChangeRoom1Beds, onResetRoom1Beds],
    room1Type: [room1Type, onChangeRoom1Type, onResetRoom1Type],
    room1Image: [room1Image, onChangeRoom1Image, onResetRoom1Image],
  } = useContext(room1Context);

  const {
    room2Name: [room2Name, onChangeRoom2Name, onResetRoom2Name],
    room2Price: [room2Price, onChangeRoom2Price, onResetRoom2Price],
    room2Bed: [room2Beds, onChangeRoom2Beds, onResetRoom2Beds],
    room2Type: [room2Type, onChangeRoom2Type, onResetRoom2Type],
    room2Image: [room2Image, onChangeRoom2Image, onResetRoom2Image],
  } = useContext(room2Context);

  const {
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
    entireHouseBed: [
      entireHouseBeds,
      onChangeEntireHouseBeds,
      onResetEntireHouseBeds,
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
  } = useContext(entireHouseContext);

  return (
    <>
      <RoomTypeInfo
        roomNo={1}
        name={room1Name}
        onNameChange={onChangeRoom1Name}
        price={room1Price}
        onPriceChange={onChangeRoom1Price}
        beds={room1Beds}
        onBedsChange={onChangeRoom1Beds}
        type={room1Type}
        onTypeChange={onChangeRoom1Type}
        image={room1Image}
        onImageChange={onChangeRoom1Image}
      />
      <RoomTypeInfo
        roomNo={2}
        name={room2Name}
        onNameChange={onChangeRoom2Name}
        price={room2Price}
        onPriceChange={onChangeRoom2Price}
        beds={room2Beds}
        onBedsChange={onChangeRoom2Beds}
        type={room2Type}
        onTypeChange={onChangeRoom2Type}
        image={room2Image}
        onImageChange={onChangeRoom2Image}
      />
      <RoomTypeInfo
        roomNo={"Entire"}
        name={entireHouseName}
        onNameChange={onChangeEntireHouseName}
        price={entireHousePrice}
        onPriceChange={onChangeEntireHousePrice}
        beds={entireHouseBeds}
        onBedsChange={onChangeEntireHouseBeds}
        type={entireHouseType}
        onTypeChange={onChangeEntireHouseType}
        image={entireHouseImage}
        onImageChange={onChangeEntireHouseImage}
      />
    </>
  );
}
