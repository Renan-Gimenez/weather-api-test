import React from "react";
import { MdLocationOn } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

// import styled from "styled-components";

// document.querySelector('#input-city').addEventListener("keyup", (e) => {
//     if (e.code === "Enter") {
//         const city = e.target.value;
//     }
// });

export default function Search({ onClick, onChange, setCityName, cityName }) {

    const value = cityName;
    const setValue = setCityName;

    return (
        <div className="search-container">
            <input id="input-city" spellCheck="true" onChange={(e) => {
                setValue(e.target.value);
                console.log(value);

                onChange();

            }} value={value} type="text" placeholder="Nome da cidade"/>
            <button onClick={onClick}><BiSearch /></button>
        </div>
    );
}
