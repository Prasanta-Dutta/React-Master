import { ShimmerCard } from "../components/ShimmerCard";
import { MENU_IMAGE_URL } from "../utils/constant";
import { useFetchMenuData } from "../utils/useFetchMenuData";


export const Menu = () => {

    const [apiData] = useFetchMenuData();

    return apiData?.length === 0 ? <ShimmerCard /> : (
        <div className="menu-container">
            <div className="restaurant-info">
                <h1 className="restaurant-name">{apiData[2]?.card?.card?.info?.name}</h1>
                <img className="restaurant-image" alt="Restaurant Image" src={MENU_IMAGE_URL + apiData[2]?.card?.card?.info?.cloudinaryImageId} />
                <p className="cuisines">{apiData[2]?.card?.card?.info?.cuisines?.join(", ")}</p>
            </div>
            <div className="item-info">
                <ul>
                    <li>Biriyani 🥗</li>
                    <li>Kabab 🍗</li>
                    <li>Momo 🥯</li>
                    <li>Burger 🍔</li>
                    <li>Pizza 🍕</li>
                </ul>
            </div>
        </div>
    )
};