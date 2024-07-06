import { useState } from "react";

const Tap = ({ count, setCount }) => {
  const [clicked, setClicked] = useState(false);
  const tap = () => {
    setCount(() => {
      localStorage.setItem("countDembel", count + 1);
      setClicked(!clicked);
      return count + 1;
    });
  };

  return (
    <div className="tap container flex">
      <div
        className={`click ${clicked && "clicked"}`}
        onTouchStart={() => tap()}
      ></div>
    </div>
  );
};

export default Tap;
