import Nav from "../components/Nav";
import ShopItem from "../components/ShopItem";

const Shop = ({ shopItems, count, setCount, userShopItems, setUserShopItems, setAfkSpeed, akfInterval, innerHeight }) => {
  const buyShopItem = (item, itemInner, price) => {
      if(price <= count && price !== 0){
          let userShopItemsInner = []

          localStorage.setItem("countDembel", price);
          setCount((prev) => prev - price);

          if(itemInner.lvl > 0){
              userShopItemsInner = userShopItems
              userShopItemsInner[userShopItems.findIndex((el => el.title === item.title))].lvl++;
          }else{
              userShopItemsInner = [...userShopItems, {...itemInner, lvl: 1}];
          }

          setUserShopItems((prevState) => [...userShopItemsInner])
          setAfkSpeed(0)
          userShopItemsInner.map((el) => {
              setAfkSpeed(
                  (prev) => {
                      let summ = 0
                      let shopItemInfo = shopItems.find((elem) => elem.title === el.title).info

                      for(let i = 0; i < el.lvl; i++){
                          summ += shopItemInfo[i].bonus
                      }

                      return prev + summ
                  }
              );
          });
          akfInterval(prev => clearInterval(prev))
          localStorage.setItem("userShopItems", JSON.stringify(userShopItemsInner));
      }
  };

  return (
    <div className="app" style={{ height: innerHeight + "px" }}>
      <div className="shop container flex">
        <h2>Магазин</h2>
        <div className="shop-list flex">
          {shopItems.map((item, index) => (
            <ShopItem
              item={item}
              count={count}
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
