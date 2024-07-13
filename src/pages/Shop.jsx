import Nav from "../components/Nav";
import ShopItem from "../components/ShopItem";

const Shop = ({ shopItems, userShopItems, innerHeight }) => {
  const buyShopItem = () => {};

  return (
    <div className="app" style={{ height: innerHeight + "px" }}>
      <div className="shop container flex">
        <h2>Улучшения</h2>
        <div className="shop-list">
          {shopItems.map((item, index) => (
            <ShopItem
              item={item}
              key={index}
              buyShopItem={buyShopItem}
              userShopItems={userShopItems}
            />
          ))}
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Shop;
