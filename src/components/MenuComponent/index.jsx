import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsActive } from "stores/slicer/menuSlice";

import "./menulist.css";

const MenuComponent = () => {
  const menuList = useSelector((state) => state.menuList.menuItemList);
  const [menuItemList, setMenuItemList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMenuItemList(menuList);
  }, [menuList]);

  const onclickMenuItem = (key) => {
    dispatch(setIsActive(key));
  };

  return (
    <div className="menu-list-wrapper">
      <ul>
        {menuItemList.map((item) => {
          return (
            <li key={item.key} onClick={() => onclickMenuItem(item.key)}>
              <a
                href={`#${item.key}`}
                className={item.isActive ? "active" : ""}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuComponent;
