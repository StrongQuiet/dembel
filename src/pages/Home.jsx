import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Tap from "../components/Tap";
import Nav from "../components/Nav";

const Home = ({
  count,
  straps,
  strap,
  progress,
  setCount,
  multiTap,
  multiTaps,
  innerHeight,
}) => {
  const [listTaps, setListTaps] = useState([]);
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef(null);

  const deleteSpan = (span) => {
    setTimeout(() => {
      span.remove();
    }, 2000);
  };

  const tap = (e) => {
    setCount((prev) => {
      localStorage.setItem(
        "countDembel",
        multiTap === 0 ? prev + 1 : prev + multiTaps[multiTap].bonus
      );
      setClicked(!clicked);
      return multiTap === 0 ? prev + 1 : prev + multiTaps[multiTap].bonus;
    });

    const postNode = document.createElement("span");
    postNode.innerText = `+${multiTap === 0 ? 1 : multiTaps[multiTap].bonus}`;
    postNode.classList.add("tap__title");
    postNode.style.cssText = `left: ${e.targetTouches[0].pageX}px; top: ${e.targetTouches[0].pageY}px`;
    containerRef.current.appendChild(postNode);

    deleteSpan(postNode);
  };

  return (
    <div className="app" style={{ height: innerHeight + "px" }}>
      <div className="home">
        <Header
          count={count}
          straps={straps}
          strap={strap}
          progress={progress}
        />
        <Tap
          count={count}
          setCount={setCount}
          listTaps={listTaps}
          setListTaps={setListTaps}
          clicked={clicked}
          setClicked={setClicked}
          tap={tap}
        />
        <Nav />
        <div ref={containerRef}></div>
      </div>
    </div>
  );
};

export default Home;
