import { useState } from "react";
import { ItemList } from "./ItemList.js";

export const RestaurantCategory = ({ category, itemIndex, showItems, showCategory }) => {
    // console.log(showCategory)
    return (
        // console.log("category", category)
        <div className="mb-5 shadow-md p-3 ">
            <div 
                className="flex justify-between cursor-pointer" 
                onClick={() => showCategory((prev) => prev === itemIndex ? null : itemIndex )}>
                <div className="text-xl text-gray-600 font-semibold">
                    {category.card.card.title} ({category.card.card.itemCards.length})
                </div>
                <div className="text-md text-gray-500 cursor-pointer">
                    ▼
                </div>
            </div>
            {
                !!showItems && <ItemList items={category.card.card.itemCards} />
            }
        </div>
    )
};