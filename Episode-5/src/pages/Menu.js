import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerCard } from "../components/ShimmerCard";

export const Menu = () => {
    const {resId} = useParams();
    const proxyURL = "http://localhost:8080/"
    const targetURL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER";
    console.log(resId);

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const data = await fetch(proxyURL + targetURL);
        const jsonData = await data.json();
        console.log("From fetchData", jsonData);
        return jsonData;
    }

    useEffect(() => {
        (async () => {
            const data = await fetchData();
            setApiData(data?.data?.cards);
        })();
        console.log("From useEffect",apiData);
    },[]);

    

    return apiData?.length === 0 ? <ShimmerCard /> : (
        <div className="menu-container">
            <div className="restaurant-info">
                <h1>{apiData[2]?.card?.card?.info?.name}</h1>
                <img alt="Restaurant Image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + apiData[2]?.card?.card?.info?.cloudinaryImageId} />
                <p>Cuisins</p>
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
}