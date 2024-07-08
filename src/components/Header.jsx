import { Link } from "react-router-dom";

const Header = ({ count, straps, strap, progress }) => {
  return (
    <div className="header container flex">
      <div className="header-inner flex">
        <Link to="/rating" className="header-item flex">
          <img className="header__img" src={straps[strap].img} alt="Погоны" />
          <h2 className="header-item__subtitle">{straps[strap].title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </Link>
        <div className="header-item flex">
          <h2 className="header-item__subtitle">Репутация в час</h2>
          <span>0</span>
        </div>
        <div
          className="header-progress"
          style={{ width: progress + "%" }}
        ></div>
      </div>
      <h2 className="header__subtitle">Ваша репутация:</h2>
      <div className="header-item flex">
        <div className={`tap-circle`}></div>
        <h1 className="header__title">{count}</h1>
      </div>
    </div>
  );
};

export default Header;
