import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default meals;
