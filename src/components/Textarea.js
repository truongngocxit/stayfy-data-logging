export default function Textarea({ label, value, onChange }) {
  const id = label.toLowerCase().split(" ").join("-");
  return (
    <label htmlFor={id} className="input">
      <span>{label}</span>
      <textarea id={id} value={value} onChange={onChange} rows={6} />
    </label>
  );
}
