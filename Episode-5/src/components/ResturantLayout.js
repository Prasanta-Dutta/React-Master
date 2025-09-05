import { useEffect, useState } from "react";
import data from "../api/ApiData";
import ResturantCard from "./ResturantCard.js";
import { ShimmerCard } from "./ShimmerCard.js";

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


    const [apiRawData, setApiRawData] = useState([]);
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        (async () => {
            console.log("useEffect execution start");
            const dt = await fetchData();
            console.log(dt);
            setApiRawData(dt);
            setCardData(dt.data.cards);
            // setCardData((prev) => ([...prev, ...dt.data.cards]));
            console.log("card data",cardData);
            console.log("useEffct execution completed");
        })();
    }, []);

    const fetchData = async () => {
        console.log("fetchData execution start");
        const proxyUrl = 'http://localhost:8080/';
        const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
        var fetchedData = await fetch(proxyUrl + targetUrl);
        console.log("Hello from fetchData(), before converting json()", fetchedData);
        fetchedData = await fetchedData.json();
        console.log("Hello from fetchData(), after converting json()", fetchedData);
        console.log("fetchData execution completed");
        return fetchedData;
    }

    console.log("Body rendered");

    if (apiRawData.length === 0) {
        return (
            <div className="shimmer-layout">
                {
                    Array(10).fill(0).map((_, index) => (
                        <ShimmerCard key={index} />
                    ))
                }
            </div>
        );
    }

    return (
        <>
            <SearchBar />
            <div className="res-layout">
                {
                    cardData?.filter((item, index) => item?.card?.card?.info)?.map((item, index) => {
                        return (
                            <ResturantCard key={index} resData={item} />
                        )
                    })
                }
            </div>
        </>
    )
};