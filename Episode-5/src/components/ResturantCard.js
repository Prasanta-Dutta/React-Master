import { RESTAURANT_IMAGE_URL } from "../utils/constant";

const ResturantCard = (props) => {
    const { resData } = props;
    return (
        <>
            <div className="w-80 max-h-min m-3 bg-slate-100 rounded-lg hover:shadow-2xl">
                <img src={RESTAURANT_IMAGE_URL + resData?.card?.card?.info?.cloudinaryImageId} className="w-12/12 h-60 rounded-2xl mb-3 p-2" alt="Food Items" />
                <div className="flex flex-col px-3 ">
                    <h3 className="text-xl text-gray-600 font-bold mb-3 whitespace-nowrap overflow-hidden overflow-ellipsis">{resData?.card?.card?.info?.name}</h3>
                    <div className="text-md text-gray-600 mb-3 whitespace-nowrap overflow-hidden overflow-ellipsis">{resData?.card?.card?.info?.cuisines?.join(", ")}</div>
                    <div className="flex justify-between mb-3">
                        <h3 className={resData?.card?.card?.info?.avgRating >= 4.5 ? "text-xl font-bold text-green-600" : "text-xl font-bold text-orange-400"}>{resData?.card?.card?.info?.avgRating} ⭐</h3>
                        <h3 className="text-xl font-bold text-gray-600">{resData?.card?.card?.info?.sla?.deliveryTime} mins</h3>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ResturantCard;