export const Menu = () => {
    return(
        <div className="menu-container">
            <div className="restaurant-info">
                <h1>Restaurant Name</h1>
                <img alt="Restaurant Image" src="." />
                <p>Cuisind</p>
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