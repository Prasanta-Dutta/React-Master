import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ResturantCard from "./ResturantCard.js";
import { ShimmerCard } from "./ShimmerCard.js";
import { useFetchRestaurantData } from "../utils/useFetchRestaurantData.js";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

export const ResturantLayout = () => {
    const [onlineStatus, setOnlineStatus] = useOnlineStatus();
    const [apiRawData, setApiRawData, cardData, setCardData] = useFetchRestaurantData();

    //.......................................................................
    const SearchBar = () => {
        const [searchText, setSearchText] = useState("");
        return (
            <>
                <div className="w-9/12 flex mx-auto my-10 bg-orange-400">
                    <input 
                        className="w-10/12 p-3 text-2xl text-white border-2 border-white placeholder:text-white outline-0" 
                        type="text" 
                        placeholder="Search Your Recipe..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button 
                        className="w-2/12 p-3 text-2xl text-white cursor-pointer border-2 border-white"
                        onClick={() => {
                            const filteredData = apiRawData?.data?.cards?.filter((item) => item?.card?.card?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
                            console.log(searchText + "🍕🍕🍕" + filteredData);
                            console.log(apiRawData);
                            console.log(filteredData);
                            setCardData(filteredData);
                        }}
                    >
                        Search
                    </button>
                </div>
            </>
        )
    };
    //.......................................................................

    console.log("Body rendered");

    if(onlineStatus === false){
        return(
            <div className="w-9/12 flex m-auto flex-col justify-center items-center">
                <h1 className="text-4xl m-5">You are ofline</h1>
                <h2 className="text-2xl">Please check your internet connection</h2>
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
            <div className="w-9/12 flex flex-wrap justify-center border-2 mx-auto">
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