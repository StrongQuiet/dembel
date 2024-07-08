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

  const [strap, setStrap] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

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

    // setCount(() => {
    //   localStorage.setItem("countDembel", count + 1);
    //   return count + 1;
    // });
  }, [count]);

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

  return (
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
            />
          }
        />
        <Route path="/rating" element={<Rating />} />
        <Route path="/boost" element={<Boost />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
