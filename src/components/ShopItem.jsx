import { useEffect, useState } from "react";

const ShopItem = ({ item, userShopItems, buyShopItem }) => {
  const [itemInner, setItemInner] = useState({
    id: 0,
    title: "",
    lvl: 0,
  });

  useEffect(() => {
    const elem = userShopItems.find((elem) => elem.title === item.title);
    if (elem) {
      setItemInner(elem);
    } else {
    }
  }, []);

  return (
    <div className={`shop-item flex`} onClick={() => buyShopItem(item)}>
      <span className="shop-item__title">{item.title}</span>
      <div className="flex">
        <div className={`shop-circle`}></div>
        <span className="shop-item__price">
          {itemInner &&
            item.info[itemInner.lvl === 0 ? 0 : itemInner.lvl - 1].price}
        </span>
      </div>
    </div>
  );
};

export default ShopItem;
