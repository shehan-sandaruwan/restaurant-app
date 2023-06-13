import React from "react";
import { useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import "./header.css";
import { ReactComponent as InfoCircle } from "assets/img/question-circle.svg";

import { ReactComponent as StarFill } from "assets/img/star-fill.svg";
import DetailSection from "./DetailSection";

const HeaderComponent = (props) => {
  const highestReviewedRestaurant = useSelector(
    (state) => state.restaurants.highestRatedRestaurant
  );
  const restaurant = highestReviewedRestaurant.restaurant[0];
  const dish = highestReviewedRestaurant.dishes[0];

  return (
    <Container>
      <header className="header-wrapper">
        <div className="header-item-container">
          <figure>
            <img src={dish.imagePath} alt="hero banner" />
          </figure>
          <div className="item-details">
            <h1>{restaurant.name}</h1>
            <h3>{dish.name}</h3>
            <DetailSection
              renderComponent={() => <InfoCircle width={30} height={30} />}
              description={restaurant.about}
              despTitle="Info"
            />
            <DetailSection
              renderComponent={() => <StarFill width={30} height={30} />}
              description="See all review"
              despTitle={`${restaurant.rating} Excellent`}
            />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default HeaderComponent;
