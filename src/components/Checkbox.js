export default function Checkbox({ label, value, onChange }) {
  const id = label.toLowerCase().split(" ").join("-");
  return (
    <label htmlFor={id} className="checkbox">
      <input
        id={id}
        type="checkbox"
        value={value}
        checked={value === true}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}
