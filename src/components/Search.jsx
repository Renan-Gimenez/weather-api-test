import React from "react";
import { MdLocationOn } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

export default function Search({ onClick, onChange, setCityName, cityName }) {

    const value = cityName;
    const setValue = setCityName;

    const cityInput = document.querySelector("#input-city");

    const resetInput = () => {
        const inputCity = document.querySelector("#input-city");

        // inputCity.value = "";
        inputCity.blur();
    }
    
    return (
        <div className="search-container">
            <input typeof="password" id="input-city" spellCheck="true" onChange={(e) => {
                setValue(e.target.value);
                console.log(value);

                onChange();

            }} onKeyUp={(e) => {
                if (e.code === "Enter") {
                    onClick();
                }

                if (e.code === "Escape") {
                    // onClick();
                    resetInput();
                }
            }} value={value} type="text" placeholder="Nome da cidade" />
            <button onClick={onClick}><BiSearch /></button>
        </div>
    );
}
