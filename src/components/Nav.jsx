import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="nav container flex">
      <div className="nav-inner flex">
        <Link
          to="/dembel"
          className={`nav__link ${location.pathname === "/dembel" && "active"}`}
        >
          Главная
        </Link>
        <Link
          to="/boost"
          className={`nav__link ${location.pathname === "/boost" && "active"}`}
        >
          Улучшения
        </Link>
        <Link
          to="/shop"
          className={`nav__link ${location.pathname === "/shop" && "active"}`}
        >
          Магазин
        </Link>
      </div>
    </div>
  );
};

export default Nav;
