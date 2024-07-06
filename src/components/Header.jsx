const Header = ({ count, straps, strap }) => {
  return (
    <div className="header container flex">
      <div className="header-inner flex">
        <div className="header-item flex">
          <h2 className="header__subtitle">Звание</h2>
          <img className="header__img" src={straps[strap].img} alt="Погоны" />
        </div>
        <div className="header-item flex">
          <h2 className="header__subtitle">Репутация в час</h2>
          <span>0</span>
        </div>
      </div>
      <h1 className="header__title">{count}</h1>
    </div>
  );
};

export default Header;
