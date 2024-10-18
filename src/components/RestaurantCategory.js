import { useState } from "react";
import MenuItem from "./MenuItem";
const RestaurantCategory = (props) => {
  const { category, showItems, setShowIndex } = props;
  const { title, itemCards } = category;
  //   console.log(category.title);

  const handleOnClick = () => {
    setShowIndex();
  };
  return (
    <>
      {/*Accordian Header */}
      <div className="w-9/12 shadow-lg p-4 mx-auto my-4 rounded-lg bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleOnClick}
        >
          <span className={""}>
            {title} ({itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {/*Accordian Body */}
        {showItems && <MenuItem items={itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
