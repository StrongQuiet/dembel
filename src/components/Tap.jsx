import { useEffect, useState } from "react";

const Tap = ({
  count,
  setCount,
  listTaps,
  setListTaps,
  clicked,
  setClicked,
  tap,
}) => {
  return (
    <div className="tap container flex">
      <div className={`tap-circle ${clicked && "clicked"}`}></div>
      <div
        className={`tap-circle-inner`}
        onTouchStart={(e) => {
          tap(e);
        }}
      ></div>
    </div>
  );
};

export default Tap;
