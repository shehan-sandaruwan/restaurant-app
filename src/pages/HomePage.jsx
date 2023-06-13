import DishItemComponent from "components/DishItemComponent";
import HeaderComponent from "components/HeaderComponent";
import MenuComponent from "components/MenuComponent";
import MainLayout from "layouts/MainLayout";
import React from "react";

const HomePage = () => {
  return (
    <MainLayout page="home">
      <HeaderComponent />
      <MenuComponent />
      <DishItemComponent />
    </MainLayout>
  );
};

export default HomePage;
