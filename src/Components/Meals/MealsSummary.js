import classes from "./MealsSummary.module.css";

const mealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, you will enjoy!</h2>
      <p>
        Choose a favorite meal from our variety of meal selections and enjoy
        your lunch anywhere!
      </p>
      <p>
        Our meals are processed and cooked with great specie of ingredients by
        professional cooks!
      </p>
    </section>
  );
};

export default mealsSummary;
