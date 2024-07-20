import { useRef, useState } from "react";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rating from "./pages/Rating";
import Boost from "./pages/Boost";
import Shop from "./pages/Shop";
import { releaseAllKeys } from "@testing-library/user-event/dist/keyboard/keyboardImplementation";
import Qr from "./pages/Qr";

const App = () => {
  const straps = [
    {
      id: 0,
      title: "Рядовой",
      img: straps1,
      counts: 0,
    },
    {
      id: 1,
      title: "Ефрейтор",
      img: straps2,
      counts: 1000,
    },
    {
      id: 2,
      title: "Младший сержант",
      img: straps3,
      counts: 5000,
    },
    {
      id: 3,
      title: "Сержант",
      img: straps4,
      counts: 50000,
    },
    {
      id: 4,
      title: "Старший сержант",
      img: straps5,
      counts: 100000,
    },
    {
      id: 5,
      title: "Старшина",
      img: straps6,
      counts: 200000,
    },
    {
      id: 6,
      title: "Прапорщик",
      img: straps7,
      counts: 300000,
    },
    {
      id: 7,
      title: "Старший прапорщик",
      img: straps8,
      counts: 400000,
    },
    {
      id: 8,
      title: "Младший лейтенант",
      img: straps9,
      counts: 500000,
    },
    {
      id: 9,
      title: "Лейтенант",
      img: straps10,
      counts: 600000,
    },
    {
      id: 10,
      title: "Старший лейтенант",
      img: straps11,
      counts: 700000,
    },
    {
      id: 11,
      title: "Капитан",
      img: straps12,
      counts: 800000,
    },
    {
      id: 12,
      title: "Майор",
      img: straps13,
      counts: 900000,
    },
    {
      id: 13,
      title: "Подполковник",
      img: straps14,
      counts: 1000000,
    },
    {
      id: 14,
      title: "Полковник",
      img: straps15,
      counts: 1100000,
    },
    {
      id: 15,
      title: "Генерал-майор",
      img: straps16,
      counts: 1200000,
    },
    {
      id: 16,
      title: "Генерал-лейтенант",
      img: straps17,
      counts: 1300000,
    },
    {
      id: 17,
      title: "Генерал-полковник",
      img: straps18,
      counts: 1400000,
    },
    {
      id: 18,
      title: "Генерал-армии",
      img: straps19,
      counts: 1500000,
    },
  ];
  const multiTaps = [
    {
      id: 0,
      price: 500,
      bonus: 1,
    },
    {
      id: 1,
      price: 2500,
      bonus: 2,
    },
    {
      id: 2,
      price: 5000,
      bonus: 4,
    },
    {
      id: 3,
      price: 10000,
      bonus: 8,
    },
    {
      id: 4,
      price: 20000,
      bonus: 16,
    },
    {
      id: 5,
      price: 0,
      bonus: 32,
    },
  ];
  const shopItems = [
    {
      id: 0,
      title: "Тапик",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
    {
      id: 1,
      title: "Афганка",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
    {
      id: 2,
      title: "Бегунок",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
    {
      id: 3,
      title: "Болтанка",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
    {
      id: 4,
      title: "Калаш",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
    {
      id: 5,
      title: "Швабра",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
    {
      id: 6,
      title: "Парадка",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
    {
      id: 7,
      title: "Подменка",
      info: [
        {
          id: 0,
          price: 1000,
          bonus: 1,
        },
        {
          id: 1,
          price: 2500,
          bonus: 2,
        },
        {
          id: 0,
          price: 3500,
          bonus: 3,
        },
      ],
    },
  ];
  const [userShopItems, setUserShopItems] = useState([]);

  const [strap, setStrap] = useState(0);
  const [count, setCount] = useState(0);
  const [afkSpeed, setAfkSpeed] = useState(0);
  const [multiTap, setMultiTap] = useState(0);
  const [progress, setProgress] = useState(0);
  const [afkInterval, setAfkInterval] = useState();
  const [oldTime, setOldTime] = useState(null);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [device, setDevice] = useState(null);

  function millisToSeconds(millis) {
    var seconds = (millis / 1000).toFixed(0);
    return seconds;
  }

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, [window.innerHeight]);

  useEffect(() => {
    if (afkSpeed !== 0) {
      setCount((prev) => {
        localStorage.setItem(
          "countDembel",
          prev + millisToSeconds(Date.now() - oldTime) * afkSpeed
        );

        return prev + millisToSeconds(Date.now() - oldTime) * afkSpeed;
      });

      localStorage.setItem("oldTimeDembel", Date.now());
    }
  }, [oldTime]);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setDevice("mobile");
    } else {
      setDevice("PC");
    }

    if (localStorage.getItem("oldTimeDembel")) {
      setOldTime(parseInt(localStorage.getItem("oldTimeDembel")));
    } else {
      localStorage.setItem("oldTimeDembel", Date.now());
    }

    if (localStorage.getItem("countDembel")) {
      setCount(parseInt(localStorage.getItem("countDembel")));
    }

    if (localStorage.getItem("strapDembel")) {
      setStrap(parseInt(localStorage.getItem("strapDembel")));
    }

    if (localStorage.getItem("multiTapDembel")) {
      setMultiTap(parseInt(localStorage.getItem("multiTapDembel")));
    }

    if (localStorage.getItem("userShopItems")) {
      setUserShopItems(JSON.parse(localStorage.getItem("userShopItems")));

      JSON.parse(localStorage.getItem("userShopItems")).map((item) => {
        setAfkSpeed((prev) => {
          let summ = 0;
          let shopItemInfo = shopItems.find(
            (elem) => elem.title === item.title
          ).info;

          for (let i = 0; i < item.lvl; i++) {
            summ += shopItemInfo[i].bonus;
          }

          return prev + summ;
        });
      });
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
    if (device === "mobile") {
      setAfkInterval(
        setInterval(() => {
          setCount((prev) => {
            localStorage.setItem("countDembel", prev + afkSpeed);

            return prev + afkSpeed;
          });
        }, 1000)
      );
    }
  }, [afkSpeed]);

  useEffect(() => {
    if (strap === 18) {
      setProgress(100);
    } else {
      setProgress(
        ((count - straps[strap].counts) /
          (straps[strap + 1].counts - straps[strap].counts)) *
          100
      );
    }
  }, [strap]);

  useEffect(() => {}, []);

  return device === "mobile" ? (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dembel"
          element={
            <Home
              count={count}
              straps={straps}
              strap={strap}
              progress={progress}
              setCount={setCount}
              afkSpeed={afkSpeed}
              multiTap={multiTap}
              multiTaps={multiTaps}
              innerHeight={innerHeight}
            />
          }
        />
        <Route
          path="/rating"
          element={
            <Rating
              count={count}
              straps={straps}
              strap={strap}
              innerHeight={innerHeight}
              progress={progress}
            />
          }
        />
        <Route
          path="/boost"
          element={
            <Boost
              count={count}
              setCount={setCount}
              multiTap={multiTap}
              setMultiTap={setMultiTap}
              multiTaps={multiTaps}
              innerHeight={innerHeight}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              shopItems={shopItems}
              count={count}
              setCount={setCount}
              userShopItems={userShopItems}
              setAfkSpeed={setAfkSpeed}
              setUserShopItems={setUserShopItems}
              akfInterval={setAfkInterval}
              innerHeight={innerHeight}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  ) : (
    <Qr innerHeight={innerHeight} />
  );
};

export default App;
