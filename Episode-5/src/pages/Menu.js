import { ShimmerCard } from "../components/ShimmerCard";
import { MENU_IMAGE_URL } from "../utils/constant";
import { useFetchMenuData } from "../utils/useFetchMenuData";
import { RESTAURANT_IMAGE_URL } from "../utils/constant";
import { useState } from "react";
import { RestaurantCategory } from "../components/RestaurantCategory.js";


export const Menu = () => {

    const [apiData] = useFetchMenuData();
    console.log("apiData", apiData);

    const [categoryIndex, setCategoryIndex] = useState(null);

    return apiData?.length === 0 ? <ShimmerCard /> : (
        <div className="flex w-9/12 mx-auto border-2 flex-col p-5">
            <div className="flex flex-col">
                <h1 className="text-3xl text-gray-600 font-bold my-10">{apiData[2]?.card?.card?.info?.name}</h1>
                <img className="w-80 h-60 mb-5" alt="Restaurant Image" src={MENU_IMAGE_URL + apiData[2]?.card?.card?.info?.cloudinaryImageId} />
                <p className="mb-5">{apiData[2]?.card?.card?.info?.cuisines?.join(", ")}</p>
            </div>
            <div className="flex flex-col">
                <ul>
                    {
                        apiData[4].groupedCard.cardGroupMap.REGULAR.cards.filter((ct) => {
                            return ct.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
                        })
                            .map((ct2, index) => {
                                return (
                                    <RestaurantCategory 
                                        category={ct2} 
                                        key={index} 
                                        itemIndex={index}
                                        showCategory={setCategoryIndex}
                                        showItems={index == categoryIndex}
                                    />
                                )
                            })
                    }
                </ul>
            </div>
        </div>
    )
};