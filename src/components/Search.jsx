import React from "react";

import { BiSearch } from 'react-icons/bi';

export default function Search({ onClick, onChange, setCityName, cityName }) {

    const value = cityName;
    const setValue = setCityName;

    const resetInput = () => {
        const inputCity = document.querySelector("#input-city");

        inputCity.blur();
    }
    
    return (
        <div className="search-container">
            <input typeof="password" id="input-city" spellCheck="true" onChange={(e) => {
                setValue(e.target.value);
                onChange();

            }} onKeyUp={(e) => {
                if (e.code === "Enter") {
                    onClick();
                }

                if (e.code === "Escape") {
                    resetInput();
                }
            }} value={value} type="text" placeholder="Nome da cidade" />
            <button onClick={onClick}><BiSearch /></button>
        </div>
    );
}
