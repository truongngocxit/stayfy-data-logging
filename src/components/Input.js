export default function Input({ label, value, onChange }) {
  const id = label.toLowerCase().split(" ").join("-");
  return (
    <label htmlFor={id} className="input">
      <span>{label}</span>
      <input id={id} value={value} onChange={onChange} />
    </label>
  );
}
