import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { restaurantInfo } = props;
  const { name, cloudinaryImageId, avgRating, cuisines, locality, costForTwo } =
    restaurantInfo;
  const imageUrl = CDN_URL + cloudinaryImageId;

  return (
    <li className="w-[220px] rounded-md border-[1px] border-red-200 h-full hover:bg-slate-50">
      <img
        src={imageUrl}
        className="w-full h-[130px] rounded-t-md"
        alt="restaurant-img"
      />
      <div className="px-2 py-3">
        <h5 className="font-semibold mb-1">{name}</h5>

        <p className="text-[14px] text-gray-600 font-semibold mb-1 overflow-hidden">
          {cuisines.join(",")}
        </p>
        <p className="text-[18px] mb-1">
          {avgRating}
          <span className="ml-1">⭐</span>
        </p>

        <h5 className="font-semibold text-red-400 mb-1">{costForTwo}</h5>
        <p className="text-[16px] mb-1">{locality}</p>
      </div>
    </li>
  );
};



export default RestaurantCard;
