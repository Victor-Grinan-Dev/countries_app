import "../../styles/tooltip.css";

function Tooltip({ text, children }) {
  return (
    <div className="tooltip-parent">
      {children}
      <span
        className="tooltip"
      >
        {text}
      </span>
    </div>
  );
}
export default Tooltip;