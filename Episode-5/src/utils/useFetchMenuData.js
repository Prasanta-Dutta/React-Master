import { useEffect, useState } from "react";
import { PROXY_URL, MENU_DATA_URL_START, MENU_DATA_URL_END } from "./constant";
import { useParams } from "react-router-dom";

export const useFetchMenuData = () => {
    const {resId} = useParams();
    const [apiData, setApiData] = useState([]);
    const targetURL = MENU_DATA_URL_START + resId + MENU_DATA_URL_END;

    useEffect(() => {
        (async () => {
            const data = await fetchData();
            setApiData(data?.data?.cards);
        })();
        // console.log("From useEffect",apiData);
    },[]);

    const fetchData = async () => {
        const data = await fetch(PROXY_URL + targetURL);
        const jsonData = await data.json();
        // console.log("From fetchData", jsonData);
        return jsonData;
    };

    return [apiData];
};