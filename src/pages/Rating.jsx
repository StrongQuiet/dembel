import { useEffect, useState } from "react";
import Nav from "../components/Nav";

const Rating = ({ count, straps, strap, progress, innerHeight }) => {
  const [str, setStr] = useState("");
  const [activeStrap, setActiveStrap] = useState(strap);

  useEffect(() => {
    if (strap === activeStrap) {
      setStr(`${count} / ${straps[strap + 1].counts}`);
    } else {
      setStr(`От ${straps[activeStrap].counts}`);
    }

    console.log(strap, activeStrap);
  }, [count, activeStrap, strap]);

  useEffect(() => {
    setActiveStrap(strap);
  }, [strap]);

  const decrementActiveStrap = () => {
    setActiveStrap(activeStrap + 1);
  };

  const incrementActiveStrap = () => {
    setActiveStrap(activeStrap - 1);
  };

  return (
    <div className="app" style={{ height: innerHeight + "px" }}>
      <div className="rating">
        <h2 className="rating__title">{straps[activeStrap].title}</h2>
        <div className="rating-slider">
          {activeStrap !== 0 && (
            <svg
              onClick={() => incrementActiveStrap()}
              className="rating-slider__btn"
              xmlns="http://www.w3.org/2000/svg"
              height="64px"
              viewBox="0 -960 960 960"
              width="64px"
              fill="#e8eaed"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          )}
          <img
            className="rating-slider__img"
            src={straps[activeStrap].img}
            alt={straps[activeStrap].title}
          />
          {activeStrap !== 18 && (
            <svg
              onClick={() => decrementActiveStrap()}
              className="rating-slider__btn"
              xmlns="http://www.w3.org/2000/svg"
              height="64px"
              viewBox="0 -960 960 960"
              width="64px"
              fill="#e8eaed"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          )}
        </div>
        <h2 className="rating__subtitle">{str}</h2>
        <Nav />
      </div>
    </div>
  );
};

export default Rating;
