import React, { useRef } from "react";

function Tooltip({
  text,
  type,
  children,
  position = "-top-8",
  colors = "bg-slate-500 text-slate-50",
  textStyle = "text-base",
  style = "px-2 py-1 rounded",
}:any) {
  const tooltipRef = useRef(null); // Initialize the ref with null

  const handleTooltipVisibility = (isVisible) => {
    if (isVisible) {
      tooltipRef?.current?.style?.visibility = "visible";
      tooltipRef?.current.classList.add("-translate-y-5");
    } else {
      tooltipRef.current.style.visibility = "hidden";
      tooltipRef.current.classList.remove("-translate-y-5");
    }
  };

  return (
    <div className="relative ease-in-out">
      <div
        className="contents"
        onMouseEnter={() => handleTooltipVisibility(true)}
        onMouseLeave={() => handleTooltipVisibility(false)}
      >
        {children}
      </div>
      <div
        ref={tooltipRef}
        className={`absolute duration-150 ease-in-out ${style} ${textStyle} ${position} ${colors}`}
        style={{ visibility: "hidden" }}
      >
        {type === "list" ? (
          <ul className="space-y-1 list-disc list-outside text-gray-300">
            {text?.map((item:any) => (
              <li key={item._id}>{item.label}</li>
            ))}
          </ul>
        ) : (
          String(text)
        )}
      </div>
    </div>
  );
}

export default Tooltip;
