import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { name, locality, cuisines, avgRating } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  // console.log(
  //   restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.itemCards
  // );
  const categories =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (eachCard) =>
        eachCard?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center my-8">
      <h2 className="text-xl font-semibold mb-3">{name}</h2>
      <span className="text-sm text-gray-500 mr-2">{locality}</span>
      <span className="text-sm from-neutral-500mr-2">
        - {cuisines.join(",")}
      </span>
      <p className="mt-3 font-semibold">{avgRating} ⭐</p>
      <ul className="mt-8 py-4">
        {categories.map((eachCategory, index) => (
          // Controlled Component
          <RestaurantCategory
            category={eachCategory?.card?.card}
            key={eachCategory?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
