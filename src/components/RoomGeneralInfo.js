import InputGroup from "./InputGroup";
import Input from "./Input";
import Textarea from "./Textarea";
import AddImagesModal from "./AddImagesModal";
import useModal from "../custom-hooks/useModal";
import { useContext } from "react";
import roomGeneralInfoContext from "../contexts/RoomGeneralInfoContext";

export default function RoomGeneralInfo({ className }) {
  const {
    lodgeName: [lodgeName, onLodgeNameChange, onResetLodgeName],
    location: [location, onLocationChange, onResetLocation],
    city: [city, onCityChange, onResetCity],
    description: [description, onDescriptionChange, onResetDescription],
    languages: [languages, onLanguagesChange, onResetLanguages],
  } = useContext(roomGeneralInfoContext);
  const [roomImgShown, onOpenRoomImg, onCloseRoomImg] = useModal();
  return (
    <InputGroup heading="General information">
      <Input
        label="Lodge name"
        value={lodgeName}
        onChange={onLodgeNameChange}
      />
      <Input
        label="City (ex: Bentre)"
        value={location}
        onChange={onLocationChange}
      />
      <Input
        label="Location (ex: Nhon Trach, Ben Tre)"
        value={city}
        onChange={onCityChange}
      />
      <Textarea
        label="Description (100 words or more) *paragraph separated by \n"
        value={description}
        onChange={onDescriptionChange}
      />
      <Input label="Languages" value={languages} onChange={onLanguagesChange} />
      <button type="button" onClick={onOpenRoomImg}>
        Add picture
      </button>
      <AddImagesModal onClose={onCloseRoomImg} isVisible={roomImgShown} />
    </InputGroup>
  );
}
