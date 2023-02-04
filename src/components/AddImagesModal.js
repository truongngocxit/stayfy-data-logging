import Input from "./Input";
import InputGroup from "./InputGroup";
import { useContext } from "react";
import roomImagesContext from "../contexts/RoomImagesContext";

export default function AddImagesModal({ roomNo, onClose, isVisible }) {
  const {
    image1: [image1, changeImage1, resetImage1],
    image2: [image2, changeImage2, resetImage2],
    image3: [image3, changeImage3, resetImage3],
    image4: [image4, changeImage4, resetImage4],
    image5: [image5, changeImage5, resetImage5],
    image6: [image6, changeImage6, resetImage6],
  } = useContext(roomImagesContext);

  return (
    <>
      <div className={`modal ${isVisible ? "" : "modal--invisible"}`}>
        <InputGroup heading={`Room ${roomNo} images`}>
          <Input label="Image 1" value={image1} onChange={changeImage1} />
          <Input label="Image 2" value={image2} onChange={changeImage2} />
          <Input label="Image 3" value={image3} onChange={changeImage3} />
          <Input label="Image 4" value={image4} onChange={changeImage4} />
          <Input label="Image 5" value={image5} onChange={changeImage5} />
          <Input label="Image 6" value={image6} onChange={changeImage6} />
          <button type="button" onClick={onClose}>
            Close
          </button>
        </InputGroup>
      </div>
      <div
        className={`overlay ${isVisible ? "" : "modal--invisible"} `}
        onClick={onClose}
      />
    </>
  );
}
