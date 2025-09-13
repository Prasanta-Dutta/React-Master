const PROXY_URL = "http://localhost:8080/";
const ALL_RESTAURANT_LIST_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
const RESTAURANT_IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const ITEM_IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
const MENU_DATA_URL_START = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=";
const MENU_DATA_URL_END = "&catalog_qa=undefined&query=Biryani&submitAction=ENTER";
const MENU_IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export {
    PROXY_URL,
    ALL_RESTAURANT_LIST_URL,
    RESTAURANT_IMAGE_URL,
    ITEM_IMAGE_URL,
    MENU_DATA_URL_START,
    MENU_DATA_URL_END,
    MENU_IMAGE_URL,
};