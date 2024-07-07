import { useState } from "react";
import "./app.css";
import logo from "./assets/img/logo.png";
import Tap from "./components/Tap";
import { useEffect } from "react";
import Header from "./components/Header";
import straps1 from "./assets/img/straps/1.png";
import straps2 from "./assets/img/straps/2.png";
import straps3 from "./assets/img/straps/3.png";
import straps4 from "./assets/img/straps/4.png";
import straps5 from "./assets/img/straps/5.png";
import straps6 from "./assets/img/straps/6.png";
import straps7 from "./assets/img/straps/7.png";
import straps8 from "./assets/img/straps/8.png";
import straps9 from "./assets/img/straps/9.png";
import straps10 from "./assets/img/straps/10.png";
import straps11 from "./assets/img/straps/11.png";
import straps12 from "./assets/img/straps/12.png";
import straps13 from "./assets/img/straps/13.png";
import straps14 from "./assets/img/straps/14.png";
import straps15 from "./assets/img/straps/15.png";
import straps16 from "./assets/img/straps/16.png";
import straps17 from "./assets/img/straps/17.png";
import straps18 from "./assets/img/straps/18.png";
import straps19 from "./assets/img/straps/19.png";

const App = () => {
  const straps = [
    {
      id: 0,
      img: straps1,
      counts: 0,
    },
    {
      id: 1,
      img: straps2,
      counts: 1000,
    },
    {
      id: 2,
      img: straps3,
      counts: 5000,
    },
    {
      id: 3,
      img: straps4,
      counts: 50000,
    },
    {
      id: 4,
      img: straps5,
      counts: 100000,
    },
    {
      id: 5,
      img: straps6,
      counts: 200000,
    },
    {
      id: 6,
      img: straps7,
      counts: 300000,
    },
    {
      id: 7,
      img: straps8,
      counts: 400000,
    },
    {
      id: 8,
      img: straps9,
      counts: 500000,
    },
    {
      id: 9,
      img: straps10,
      counts: 600000,
    },
    {
      id: 10,
      img: straps11,
      counts: 700000,
    },
    {
      id: 11,
      img: straps12,
      counts: 800000,
    },
    {
      id: 12,
      img: straps13,
      counts: 900000,
    },
    {
      id: 13,
      img: straps14,
      counts: 1000000,
    },
    {
      id: 14,
      img: straps15,
      counts: 1100000,
    },
    {
      id: 15,
      img: straps16,
      counts: 1200000,
    },
    {
      id: 16,
      img: straps17,
      counts: 1300000,
    },
    {
      id: 17,
      img: straps18,
      counts: 1400000,
    },
    {
      id: 18,
      img: straps19,
      counts: 1500000,
    },
  ];
  const [listTaps, setListTaps] = useState([]);

  const [strap, setStrap] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (localStorage.getItem("countDembel")) {
      setCount(parseInt(localStorage.getItem("countDembel")));
    }

    if (localStorage.getItem("strapDembel")) {
      setStrap(parseInt(localStorage.getItem("strapDembel")));
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < straps.length - 1; i++) {
      if (count >= straps[i].counts && count < straps[i + 1].counts)
        setStrap(straps[i].id);
    }

    if (count >= 1500000) {
      setStrap(straps[18].id);
      setProgress(100);
    } else {
      setProgress(
        ((count - straps[strap].counts) /
          (straps[strap + 1].counts - straps[strap].counts)) *
          100
      );

      if (progress >= 100) {
        setProgress(0);
      }
    }
  }, [count]);

  useEffect(() => {
    setProgress(
      ((count - straps[strap].counts) /
        (straps[strap + 1].counts - straps[strap].counts)) *
        100
    );
  }, [strap]);

  useEffect(() => {
    const interval = setInterval(() => {
      // for (let i = 0; i < listTaps.length; i++) {
      //   if (listTaps[i].opacity <= 0) {
      //     setListTaps(listTaps.filter((item) => item.id !== listTaps[i].id));
      //   } else {
      //     listTaps[i].opacity -= 0.1;
      //   }

      //   setDate(new Date());
      // }

      listTaps.forEach((item, i) => {
        item.opacity = item.opacity - 0.1;

        setDate(new Date());
      });

      setListTaps(listTaps.filter((item) => item.opacity > 0));

      return clearInterval(interval);
    }, 1000);
  }, [listTaps, date]);

  return (
    <div className="app">
      <Header count={count} straps={straps} strap={strap} progress={progress} />
      <Tap
        count={count}
        setCount={setCount}
        listTaps={listTaps}
        setListTaps={setListTaps}
        setDate={setDate}
      />
      {listTaps.map(
        (item, index) =>
          item.opacity >= -3 && (
            <span
              className="tap__title"
              key={index}
              dataOpacity={item.opacity.toFixed(2)}
              style={{ left: item.x, top: item.y, opacity: item.opacity }}
            >
              + 1
            </span>
          )
      )}
    </div>
  );
};

export default App;
