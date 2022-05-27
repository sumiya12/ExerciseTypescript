import { useState } from "react";

function useHover() {
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
}

function MyComponent() {
  const [buttonAIsHovering, buttonAHoverProps] = useHover();
  const [buttonBIsHovering, buttonBHoverProps] = useHover();
  const [buttonCIsHovering, buttonCHoverProps] = useHover();
  const [buttonDIsHovering, buttonDHoverProps] = useHover();
  const [buttonEIsHovering, buttonEHoverProps] = useHover();

  return (
    <div>
      <div>
        {buttonAIsHovering
          ? "button A hovering"
          : buttonBIsHovering
          ? "button B hovering"
          : buttonCIsHovering
          ? "button C hovering"
          : buttonDIsHovering
          ? "button D hovering"
          : "button E hovering"}
      </div>
      <button {...buttonAHoverProps}>A</button>
      <button {...buttonBHoverProps}>B</button>
      <button {...buttonCHoverProps}>C</button>
      <button {...buttonDHoverProps}>D</button>
      <button {...buttonEHoverProps}>E</button>
    </div>
  );
}
export default MyComponent;
