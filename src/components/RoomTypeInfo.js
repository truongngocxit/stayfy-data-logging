import InputGroup from "./InputGroup";
import Input from "./Input";
import RoomTypeSelect from "./RoomTypeSelect";

export default function RoomTypeInfo({
  roomNo,
  name,
  price,
  beds,
  image,
  type,
  quantity,
  sleeps,
  onTypeChange,
  onNameChange,
  onPriceChange,
  onBedsChange,
  onSleepsChange,
  onImageChange,
  onQuantityChange,
}) {
  return (
    <InputGroup heading={`room ${roomNo}`}>
      <Input label="Room name" value={name} onChange={onNameChange} />
      <Input label="Room price" value={price} onChange={onPriceChange} />
      <Input
        label="Room quantity"
        value={quantity}
        onChange={onQuantityChange}
      />
      <Input label="Room beds" value={beds} onChange={onBedsChange} />
      <Input label="Room sleeps" value={sleeps} onChange={onSleepsChange} />
      <Input label="Room Image" value={image} onChange={onImageChange} />
      <RoomTypeSelect value={type} onChange={onTypeChange} />
    </InputGroup>
  );
}
