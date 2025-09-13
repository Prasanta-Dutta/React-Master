import { useEffect, useState } from "react";
import { PROXY_URL, ALL_RESTAURANT_LIST_URL } from "./constant";

export const useFetchRestaurantData = () => {
    const [apiRawData, setApiRawData] = useState([]);
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        (async () => {
            // console.log("useEffect execution start");
            const dt = await fetchData();
            // console.log(dt);
            setApiRawData(dt);
            setCardData(dt.data.cards);
            // setCardData((prev) => ([...prev, ...dt.data.cards]));
            // console.log("card data",cardData);
            // console.log("useEffct execution completed");
        })();
    }, []);

    const fetchData = async () => {
        // console.log("fetchData execution start");
        var fetchedData = await fetch(PROXY_URL + ALL_RESTAURANT_LIST_URL);
        // console.log("Hello from fetchData(), before converting json() ~debugger", fetchedData);
        // debugger;
        fetchedData = await fetchedData.json();
        // console.log("Hello from fetchData(), after converting json()", fetchedData);
        // console.log("fetchData execution completed");
        return fetchedData;
    };

    return [apiRawData, setApiRawData, cardData, setCardData];
};