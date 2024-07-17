import { useEffect, useState } from "react";

const ShopItem = ({ count, item, userShopItems, buyShopItem }) => {
  const [itemInner, setItemInner] = useState({
    id: 0,
    title: item.title,
    lvl: 0,
  });

  useEffect(() => {
    const elem = userShopItems.find((elem) => elem.title === item.title);
    if (elem) {
      setItemInner(elem);
    }
  }, [userShopItems]);

  return (
    <div className={`shop-item flex ${itemInner.lvl === 3 && "hidden"} ${item.info[itemInner.lvl === 3 ? 0 : itemInner.lvl].price > count && "hidden"}`} onClick={() => itemInner.lvl !== 3 && buyShopItem(item, itemInner, item.info[itemInner.lvl === 3 ? 0 : itemInner.lvl].price)}>
      <span className="shop-item__title">{item.title} ({itemInner.lvl})</span>
      <div className="flex">
        <div className={`tap-circle`}></div>
        <span className="shop-item__price">
          {itemInner && itemInner.lvl === 3 ? "0" :
              item.info[itemInner.lvl === 3 ? 0 : itemInner.lvl].price}
        </span>
      </div>
    </div>
  );
};

export default ShopItem;
