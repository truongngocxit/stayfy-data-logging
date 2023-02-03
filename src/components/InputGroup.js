export default function InputGroup({ heading, children, className }) {
  return (
    <div className="input-group">
      <h2>{heading}</h2>
      <div className={`input-group-list ${className}`}>{children}</div>
    </div>
  );
}
