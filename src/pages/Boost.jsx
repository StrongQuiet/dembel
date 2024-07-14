import { useEffect } from "react";
import Nav from "../components/Nav";

const Boost = ({
  count,
  setCount,
  multiTap,
  multiTaps,
  setMultiTap,
  innerHeight,
}) => {
  const buyMultiTap = () => {
    if (multiTap !== 5) {
      if (count >= multiTaps[multiTap].price) {
        localStorage.setItem("countDembel", count - multiTaps[multiTap].price);
        localStorage.setItem("multiTapDembel", multiTap + 1);

        setCount((prev) => prev - multiTaps[multiTap].price);
        setMultiTap(multiTap + 1);
      }
    }
  };

  useEffect(() => {
    console.log(multiTap);
  }, [multiTap]);

  return (
    <div className="app" style={{ height: innerHeight + "px" }}>
      <div className="boost container flex">
        <h2>Улучшения</h2>
        <div
          className={`boost-item flex ${multiTap === 5 && "hidden"} ${multiTaps[multiTap].price > count && "hidden"}`}
          onClick={() => buyMultiTap()}
        >
          <span className="boost-item__title">
            Многократное нажатие ({multiTap})
          </span>
          <div className="flex">
            <div className={`tap-circle`}></div>
            <span className="boost-item__price">
              {multiTaps[multiTap].price}
            </span>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Boost;
