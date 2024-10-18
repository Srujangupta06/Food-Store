import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";
const MenuItem = (props) => {
  const { items } = props;
  const { userName } = useContext(UserContext);
  console.log(userName);
  return (
    <ul>
      {items.map((eachItem) => (
        <li
          className="border-b-4 py-4 text-left"
          key={eachItem?.card?.info?.id}
        >
          <div className="flex justify-between mb-4">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-[18px]">
                {eachItem?.card?.info?.name}
              </span>
              <span className="font-semibold text-sm text-red-500">
                ₹
                {eachItem?.card?.info?.price
                  ? eachItem?.card?.info?.price / 100
                  : eachItem?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-[14px] text-gray-400 mt-1">
                {eachItem?.card?.info?.description}
              </p>
            </div>
            {eachItem?.card?.info?.imageId && (
              <div className="relative">
                <div className="absolute top-2 mx-6">
                  <button className="bg-black text-white py-1 px-2  text-sm rounded-[5px]">
                    Add +
                  </button>
                </div>
                <img
                  src={CDN_URL + eachItem?.card?.info?.imageId}
                  className="w-[200px] h-[130px] rounded-sm"
                  alt=""
                />
              </div>
            )}
            {!eachItem?.card?.info?.imageId && (
              <div>
                <span className="text-sm">Currently Not available</span>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default MenuItem;
