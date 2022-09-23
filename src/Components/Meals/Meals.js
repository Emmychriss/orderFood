import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

const meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default meals;
