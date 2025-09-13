import { ITEM_IMAGE_URL } from "../utils/constant"

export const ItemList = ({ items }) => {
    return (
        <div className="mt-3 border-t-3 border-gray-200">
            <ul>
                {
                    items.filter((item) => {
                        return(
                            item.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish"
                        )
                    })
                    .map((item) => {
                        return(
                            <div className="my-3 p-3 flex justify-between border-b-2 border-gray-200" key={item.card.info.id}>
                                <div className="w-9/12">
                                    <h1 className="text-xl text-gray-700 font-bold mb-2">{item.card.info.name}</h1>
                                    <p className="text-lg text-gray-700 font-bold">₹ {item.card.info?.price / 100 || item.card.info?.defaultPrice / 100}</p>
                                    <h2 className="font-bold">
                                        <span className="text-md text-emerald-700">
                                            ★ {item.card.info.ratings.aggregatedRating.rating}
                                        </span> 
                                        <span className="text-md text-gray-500">
                                            &nbsp;({item.card.info.ratings.aggregatedRating.ratingCountV2 || 0})
                                        </span>
                                    </h2>
                                    <p className="tex-md text-gray-700 max-w-2xl max-h-20 overflow-hidden overflow-ellipsis">{item.card.info.description}</p>
                                </div>
                                {
                                    !!item.card.info.imageId && 
                                    <img className="w-2/12 h-30" src={ITEM_IMAGE_URL + item.card.info.imageId} alt="Item Image" />
                                }
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}