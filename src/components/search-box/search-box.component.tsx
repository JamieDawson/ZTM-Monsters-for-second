import "./search-box.styles.css";

import React, { ChangeEvent } from 'react';

interface SearchBoxProps {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ className, placeholder, onChangeHandler }) => {
    return (
        <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler} //it's a handler
        />
    );
};

export default SearchBox;