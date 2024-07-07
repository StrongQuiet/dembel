import { useState } from "react";

const Tap = ({ count, setCount, listTaps, setListTaps, setDate }) => {
  const [clicked, setClicked] = useState(false);
  const tap = (e) => {
    setCount(() => {
      localStorage.setItem("countDembel", count + 1);
      setClicked(!clicked);
      return count + 1;
    });
    console.log(e);

    // setListTaps((listTaps) => [
    //   ...listTaps,
    //   {
    //     id: listTaps.length,
    //     x: e.targetTouches[0].pageX,
    //     y: e.targetTouches[0].pageY,
    //     opacity: 1,
    //   },
    // ]);

    listTaps.push({
      id: Date.now(),
      x: e.targetTouches[0].pageX,
      y: e.targetTouches[0].pageY,
      opacity: 1,
    });
  };

  return (
    <div className="tap container flex">
      <div
        className={`click ${clicked && "clicked"}`}
        onTouchStart={(e) => tap(e)}
      ></div>
    </div>
  );
};

export default Tap;
