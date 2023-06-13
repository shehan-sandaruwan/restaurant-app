import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DishCard from "./DishCard";

const DishItemComponent = () => {
  const dishesList = useSelector((state) => state.dishItemList.dishesList);
  const menuList = useSelector((state) => state.menuList.menuItemList);
  const [dishes, setDishes] = useState({
    bread: [],
    coffee: [],
    greenFood: [],
    iceCream: [],
    burger: [],
  });

  useEffect(() => {
    const bread = [];
    const coffee = [];
    const greenFood = [];
    const iceCream = [];
    const burger = [];

    if (dishesList) {
      dishesList.forEach((item) => {
        switch (item.menuId) {
          case "bread":
            bread.push(item);
            return;
          case "coffee":
            coffee.push(item);
            return;
          case "greenFood":
            greenFood.push(item);
            return;
          case "iceCream":
            iceCream.push(item);
            return;
          case "burger":
            burger.push(item);
            return;
          default:
            break;
        }
        setDishes({
          bread: bread,
          coffee: coffee,
          greenFood: greenFood,
          iceCream: iceCream,
          burger: burger,
        });
      });
    }
  }, [dishesList]);

  return (
    <div className="dish-item-list">
      {menuList.map((item) => {
        return (
          <React.Fragment>
            <h2 id={item.key}>{item.name}</h2>
            <ul>
              {dishes[item.key]?.map((dish) => {
                return (
                  <li key={dish.id}>
                    <DishCard {...dish} />
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DishItemComponent;
