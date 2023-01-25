import "../views/scss/button.scss";
export default function ColumnHeaderButton({
  className,
  onMouseOver,
  onMouseOut,
  onClick,
  title,
  chevron,
}) {
  const checkChevronConditions = (chevron, title) => {
    return (
      chevron.atall === true && chevron.down === true && chevron.title === title
    );
  };
  return (
    <div
      className={className}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      {chevron !== undefined &&
        (checkChevronConditions(chevron, title) ? (
          <i className="fa fa-chevron-up"></i>
        ) : (
          <i className="fa fa-chevron-down"></i>
        ))}
      {title}
    </div>
  );
}
