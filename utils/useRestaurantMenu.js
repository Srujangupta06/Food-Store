import { useEffect, useState } from "react";
import { MENU_LIST_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_LIST_API + resId);
    const jsonData = await data.json();
    setRestaurantMenu(jsonData.data);
    // console.log(jsonData?.data);
  };

  //fetch the data
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  return restaurantMenu;
};
export default useRestaurantMenu;
