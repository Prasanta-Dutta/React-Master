import React from "react";
import ReactDOM from "react-dom/client";
import data from "./ApiData"

const root = ReactDOM.createRoot(document.getElementById("root"));

const data = data;


const Heading = () => {
    return (
        <h1 className="heading">Hello Hungry 🍔🍟🍕</h1>
    )
};

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="logo-name">
                    <Logo />
                    <CompanyName />
                </div>
                <NavItems />
            </div>
        </>
    )
};

const Logo = () => {
    return (
        <img src="https://cdn.dribbble.com/userupload/21733107/file/original-0cdd8dea6fb0ced84ec55dbefd033ee5.png?resize=752x&vertical=center" alt="App Logo" className="logo" />
    )
};

const CompanyName = () => {
    return (
        <h1 className="company-name">Hungry</h1>
    )
}

const NavItems = () => {
    return (
        <>
            <ul className="nav-item-container">
                <li className="nav-items">Home</li>
                <li className="nav-items">About</li>
                <li className="nav-items">Contact</li>
                <li className="nav-items">Support</li>
            </ul>
        </>
    )
};

const Body = () => {
    return (
        <>
            <SearchBar />
            <ResturantLayout />
        </>
    )
};

const SearchBar = () => {
    return (
        <>
            <div className="search-box">
                <input className="search-field" type="text" placeholder="Search Your Recipe..." />
                <div className="search-btn">Search</div>
            </div>
        </>
    )
};

const ResturantLayout = () => {
    return (
        <>
            <div className="res-layout">
                {
                    data.cards.map((item, index) => {
                        return(
                            <ResturantCard key={index} resData={item} />
                        )
                    })
                }
            </div>
        </>
    )
};

const ResturantCard = (props) => {
    const {resData} = props;
    console.log(resData)
    return (
        <>
            <div className="card-container">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.card.info.cloudinaryImageId} className="card-img" alt="Food Items" />
                <div className="food-details">
                    <h3>{resData.card.card.info.name}</h3>
                    <p>{resData.card.card.info.cuisines.join(", ")}</p>
                    <h3>{resData.card.card.info.avgRating}</h3>
                    <h3>{resData.card.card.info.sla.deliveryTime} mins</h3>
                </div>
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
};
root.render(<AppLayout />);


