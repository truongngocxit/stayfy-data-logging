import InputGroup from "./InputGroup";
import Input from "./Input";
import AddPictureModal from "./AddPictureModal";
import useModal from "../custom-hooks/useModal";
import { useContext } from "react";
import roomGeneralInfoContext from "../contexts/RoomGeneralInfoContext";

export default function RoomGeneralInfo({ className }) {
  const {
    lodgeName: [lodgeName, onLodgeNameChange, onResetLodgeName],
    location: [location, onLocationChange, onResetLocation],
    city: [city, onCityChange, onResetCity],
  } = useContext(roomGeneralInfoContext);
  const [roomImgShown, onOpenRoomImg, onCloseRoomImg] = useModal();
  return (
    <InputGroup heading="General information">
      <Input
        label="lodge name"
        value={lodgeName}
        onChange={onLodgeNameChange}
      />
      <Input
        label="city (ex: Bentre)"
        value={location}
        onChange={onLocationChange}
      />
      <Input
        label="location (ex: Nhon Trach, Ben Tre)"
        value={city}
        onChange={onCityChange}
      />{" "}
      <button type="button" onClick={onOpenRoomImg}>
        Add picture
      </button>
      {roomImgShown && <AddPictureModal onClose={onCloseRoomImg} />}
    </InputGroup>
  );
}
