import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="nav container flex">
      <div className="nav-inner flex">
        <Link
          to="/dembel"
          className={`nav__link ${
            location.pathname.replace(/\W|_/g, "") === "dembel" && "active"
          }`}
        >
          Главная
        </Link>
        <Link
          to="/boost"
          className={`nav__link ${
            location.pathname.replace(/\W|_/g, "") === "boost" && "active"
          }`}
        >
          Улучшения
        </Link>
        <Link
          to="/shop"
          className={`nav__link ${
            location.pathname.replace(/\W|_/g, "") === "shop" && "active"
          }`}
        >
          Магазин
        </Link>
      </div>
    </div>
  );
};

export default Nav;
