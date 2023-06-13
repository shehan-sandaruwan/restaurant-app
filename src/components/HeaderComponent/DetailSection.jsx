import React from "react";
import { ReactComponent as Next } from "assets/img/chevron-right.svg";

const DetailSection = ({ description, despTitle, renderComponent }) => {
  return (
    <div>
      <span>{renderComponent()}</span>
      <div>
        <span>{despTitle}</span>
        <p> {description}</p>
      </div>
      <span>
        <Next color="#00ccbc" width={30} height={30} />
      </span>
    </div>
  );
};

export default DetailSection;
