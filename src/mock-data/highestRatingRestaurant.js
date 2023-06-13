import cupcake from "assets/img/foods/cupcake.jpg";
import bakery from "assets/img/restaurants/breadbakery.jpg";

export const restaurantWithHigherRates = {
  restaurant: [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: bakery,
      about:
        "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
      hours: "Funciona de segunda à sexta, de 8h às 23h",
    },
  ],
  dishes: [
    {
      id: "cup-cake",
      imagePath: cupcake,
      name: "Cup Cake",
      description: "Cup Cake recheado de Doce de Leite",
      price: 8.7,
      restaurantId: "bread-bakery",
    },
  ],
};
