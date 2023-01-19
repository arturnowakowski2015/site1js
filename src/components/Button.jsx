export default function Button({ className, onMouseOver, onClick, title }) {
  return (
    <div
      className={className}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOver}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
