import React from "react";
import { MdLocationOn } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

// import styled from "styled-components";

export default function Search() {
    return (
        <div className="search-container">
            <input type="text" placeholder="Nome da cidade"/>
            <button><BiSearch /></button>
        </div>
    );
}
