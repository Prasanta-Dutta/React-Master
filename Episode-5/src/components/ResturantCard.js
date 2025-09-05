const ResturantCard = (props) => {
    const {resData} = props;
    return (
        <>
            <div className="card-container">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.card?.card?.info?.cloudinaryImageId} className="card-img" alt="Food Items" />
                <div className="food-details">
                    <h3>{resData?.card?.card?.info?.name}</h3>
                    <p>{resData?.card?.card?.info?.cuisines?.join(", ")}</p>
                    <h3>{resData?.card?.card?.info?.avgRating}</h3>
                    <h3>{resData?.card?.card?.info?.sla?.deliveryTime} mins</h3>
                </div>
            </div>
        </>
    )
};

export default ResturantCard;