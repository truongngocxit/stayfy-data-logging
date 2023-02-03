import Input from "./Input";
import InputGroup from "./InputGroup";

export default function AddPictureModal({ roomNo, onClose }) {
  return (
    <>
      <div className="modal">
        <InputGroup heading={`Room ${roomNo} images`}>
          <Input label="Image 1" />
          <Input label="Image 2" />
          <Input label="Image 3" />
          <Input label="Image 4" />
          <Input label="Image 5" />
          <Input label="Image 6" />
          <button type="button" onClick={onClose}>
            Close
          </button>
        </InputGroup>
      </div>
      <div className="overlay" onClick={onClose} />
    </>
  );
}
