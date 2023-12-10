"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");

    const handleSearch = () => {};
    return (
        <form onSubmit={handleSearch} className="searchbar">
            <div className="searchbar__item">
                <SearchManufacturer />
            </div>
        </form>
    );
};
export default SearchBar;
