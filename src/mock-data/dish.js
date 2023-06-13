import cupcake from "assets/img/foods/cupcake.jpg";
import donut from "assets/img/foods/donut.jpg";
import bread from "assets/img/foods/bread.jpg";
import burger from "assets/img/foods/burger.jpg";
import fries from "assets/img/foods/fries.jpeg";
import coke from "assets/img/foods/coke.jpeg";
import capp from "assets/img/foods/cup.jpeg";
import espreso from "assets/img/foods/espresso.jpeg";
import starb from "assets/img/foods/starb.jpeg";
import zlasagna from "assets/img/foods/zlasagna.jpeg";
import greenSandwitch from "assets/img/foods/greensandwitch.jpeg";
import ceasar from "assets/img/foods/ceasar.jpeg";
import sunday from "assets/img/foods/sunday.jpg";
import chocpop from "assets/img/foods/chocpop.jpeg";
import icestd from "assets/img/foods/icestd.jpeg";
import cup from "assets/img/foods/cup.jpeg";
import straw from "assets/img/foods/straw.jpeg";
import cake from "assets/img/foods/cake.jpeg";

export const dishes = {
  dishItems: [
    {
      id: "cup-cake",
      imagePath: cupcake,
      name: "Cup Cake",
      description: "Cup Cake recheado de Doce de Leite",
      price: 8.7,
      restaurantId: "bread-bakery",
      menuId: "bread",
    },
    {
      id: "donut",
      imagePath: donut,
      name: "Donut",
      description: "Coberto com chantilly",
      price: 2.5,
      restaurantId: "bread-bakery",
      menuId: "bread",
    },
    {
      id: "bread",
      imagePath: bread,
      name: "Pão Artesanal Italiano",
      description: "Pão artesanal com queijos italianos",
      price: 15.9,
      restaurantId: "bread-bakery",
      menuId: "bread",
    },
    {
      id: "burger",
      imagePath: burger,
      name: "Classic Burger",
      description: "O clássico. Não tem como errar.",
      price: 18.5,
      restaurantId: "burger-house",
      menuId: "burger",
    },
    {
      id: "fries",
      imagePath: fries,
      name: "Batatas Fritas",
      description: "Batatas fritas crocantes",
      price: 5.5,
      restaurantId: "burger-house",
      menuId: "burger",
    },
    {
      id: "coke.png",
      imagePath: coke,
      name: "Refrigerante",
      description: "O refri mais gelado da cidade.",
      price: 4.5,
      restaurantId: "burger-house",
      menuId: "burger",
    },
    {
      id: "capp",
      imagePath: cup,
      name: "Cappuccino com Chantilly",
      description: "Tradicional cappuccino com chantilly",
      price: 9.9,
      restaurantId: "coffee-corner",
      menuId: "coffee",
    },
    {
      id: "espreso",
      imagePath: espreso,
      name: "Super Espreso",
      description: "Café espresso duplo. ",
      price: 12.5,
      restaurantId: "coffee-corner",
      menuId: "coffee",
    },
    {
      id: "starb",
      imagePath: starb,
      name: "Starbucks Copycat",
      description:
        "O mais pedido da casa. O verdadeiro café americano pura água.",
      price: 15.6,
      restaurantId: "coffee-corner",
      menuId: "coffee",
    },
    {
      id: "zlasagna",
      imagePath: zlasagna,
      name: "Lasagna de Zucchini",
      description: "Lasagna deliciosa que se salva por causa do queijo",
      price: 14.9,
      restaurantId: "green-food",
      menuId: "greenFood",
    },
    {
      id: "greensandwich",
      imagePath: greenSandwitch,
      name: "Sanduíche de Frango",
      description: "Frango grelhado e salada",
      price: 10.5,
      restaurantId: "green-food",
      menuId: "greenFood",
    },
    {
      id: "ceasar",
      imagePath: ceasar,
      name: "Salada Ceasar",
      description: "Clássica salada ceasar.",
      price: 33.9,
      restaurantId: "green-food",
      menuId: "greenFood",
    },
    {
      id: "sunday",
      imagePath: sunday,
      name: "Mega Sunday",
      description: "Sunday com várias bolas de sorvete a sua escolha",
      price: 21.5,
      restaurantId: "ice-cream",
      menuId: "iceCream",
    },
    {
      id: "chocpop",
      imagePath: chocpop,
      name: "Picolé de Brigadeiro",
      description: "Picolé de brigadeiro recheado com côco.",
      price: 8.5,
      restaurantId: "ice-cream",
      menuId: "iceCream",
    },
    {
      id: "icestd",
      imagePath: icestd,
      name: "Sorvete Simples",
      description:
        "Clássico sorvete de rua onde todos os sabores são idênticos.",
      price: 1.5,
      restaurantId: "ice-cream",
      menuId: "iceCream",
    },
    {
      id: "cup",
      imagePath: cup,
      name: "Cup Cake de Choc. Branco",
      description: "Cup Cake de chocolate branco",
      price: 5.5,
      restaurantId: "tasty-treats",
    },
    {
      id: "straw",
      imagePath: straw,
      name: "Bolo de Morango",
      description: "Bolo recheado e coberto com morangos",
      price: 40.5,
      restaurantId: "tasty-treats",
      menuId: "bread",
    },
    {
      id: "cake",
      imagePath: cake,
      name: "Fatia de Bolo",
      description: "Fatia de bolo de morango",
      price: 5.9,
      restaurantId: "tasty-treats",
      menuId: "bread",
    },
  ],
};
