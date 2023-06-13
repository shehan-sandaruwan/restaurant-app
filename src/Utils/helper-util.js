import { menuList } from "mock-data/menu";

export const getMenuBasedOnMenuId = (id) => {
  const menuObj = menuList.find((item) => item.key === id);

  if (menuObj) {
    return menuObj.name;
  }

  return "";
};

export const formatCurrency = (currency) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(currency);
};

export const onSignIn = (googleUser) => {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
};
