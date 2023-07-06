function Tooltip({
  text,
  type,
  children,
  position = "-top-8",
  colors = "bg-slate-500 text-slate-50",
  textStyle = "text-base",
  style = "px-2 py-1 rounded",
}: any) {
  let isVisibleStyle;
  const handleTooltipVisibility = (isVisible: any) => {
    if (isVisible) {
      isVisibleStyle = "visible -translate-y-5";
    } else {
      isVisibleStyle = "-translate-y-0 hidden";
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
        className={`absolute duration-150 ease-in-out ${isVisibleStyle} ${style} ${textStyle} ${position} ${colors}`}
        style={{ visibility: "hidden" }}
      >
        {type === "list" ? (
          <ul className="space-y-1 list-disc list-outside text-gray-300">
            {text?.map((item: any) => (
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
