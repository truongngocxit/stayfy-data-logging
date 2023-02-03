export default function RoomTypeSelect({ value = "private", onChange }) {
  return (
    <label className="select">
      <span>Select room type</span>
      <select value={value} onChange={onChange}>
        <option value="private">Private</option>
        <option value="shared">Shared</option>
        <option value="entire">Entire house</option>
      </select>
    </label>
  );
}
