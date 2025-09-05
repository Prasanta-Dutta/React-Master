import { useState } from "react";

export const SearchBar = () => {
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
                <button className="search-btn">Search</button>
            </div>
        </>
    )
};