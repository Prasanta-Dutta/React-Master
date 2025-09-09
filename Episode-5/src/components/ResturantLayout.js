import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ResturantCard from "./ResturantCard.js";
import { ShimmerCard } from "./ShimmerCard.js";
import { useFetchRestaurantData } from "../utils/useFetchRestaurantData.js";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

export const ResturantLayout = () => {

    //.......................................................................
    const SearchBar = () => {
        const [searchText, setSearchText] = useState("");
        return (
            <>
                <div className="search-box">
                    <input 
                        className="search-field" 
                        type="text" 
                        placeholder="Search Your Recipe..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button 
                        className="search-btn"
                        onClick={() => {
                            const filteredData = apiRawData?.data?.cards?.filter((item) => item?.card?.card?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
                            console.log(searchText + "🍕🍕🍕" + filteredData);
                            console.log(apiRawData);
                            console.log(filteredData);
                            setCardData(filteredData);
                        }}
                    >
                        🍳
                    </button>
                </div>
            </>
        )
    };
    //.......................................................................

    const [onlineStatus, setOnlineStatus] = useOnlineStatus();
    const [apiRawData, cardData] = useFetchRestaurantData();

    console.log("Body rendered");

    if(onlineStatus === false){
        return(
            <div className="online-status-render">
                <h1>You are ofline</h1>
                <h2>Please check your internet connection</h2>
            </div>
        )
    }

    if (apiRawData.length === 0) {
        return (
            <ShimmerCard />
        );
    }

    return (
        <>
            <SearchBar />
            <div className="res-layout">
                {
                    cardData?.filter((item, index) => item?.card?.card?.info)?.map((item, index) => {
                        return (
                            // Also can pas id as props to each card rather than passing param to url
                            <Link className="res-card" to={"/restaurant/menu/" + item?.card?.card?.info?.id} key={index}>
                                <ResturantCard resData={item} />
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
};