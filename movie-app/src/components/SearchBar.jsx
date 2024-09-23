import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.elements.search.value);
    };

    

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                name="search"
                placeholder="Bir film ara..."
                defaultValue={searchTerm}
            />
            <button type="submit">Ara</button>
        </form>
    );
};

export default SearchBar;
