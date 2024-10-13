import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { name, locality } = restaurantMenu?.cards[2]?.card?.card?.info;
  const items =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  console.log(
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards
  );
  return (
    <div>
      <h2>{name}</h2>
      <p>{locality}</p>
      <h3>Menu</h3>
      <ul>
        {restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (eachRestaurant) => (
            <li key={eachRestaurant.card.info.id}>
              {eachRestaurant.card.info.name} -{" "}
              {eachRestaurant.card.info.price / 100} Rs/-
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
