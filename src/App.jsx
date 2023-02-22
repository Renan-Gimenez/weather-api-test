import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Components
import Header from './components/Header';
import Search from './components/Search';

// Icons
import { MdLocationOn } from 'react-icons/md';
import { MdWaterDrop } from 'react-icons/md';
import { FaWind } from 'react-icons/fa';
import Loading from './components/Loading';

function App() {
  const [cityName, setCityName] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(true);

  const [countryFlag, setCountryFlag] = useState('');
  const [temperature, setTemperature] = useState();
  const [description, setDescription] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  
  const getWeatherData = async (city) => {
    const apiKey = '6615acb49bc873de86d687d122155ade';
    const ApiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const { data } = await axios.get(ApiWeatherURL);

    return data;
  }

  const showWeatherData = async () => {

    // document.querySelector(".info-container").classList.add("hide");
    // document.querySelector("#loader").classList.remove("hide");

    setLoading(true);
    
    const data = await getWeatherData(cityName);
    console.log(data);

    setCountryFlag(`https://flagcdn.com/16x12/${data.sys.country}.png`);

    // setCityName(data.name);
    // setCityName(inputValue);
    setName(cityName);
    
    console.log(cityName);

    setTemperature(parseInt(data.main.temp));
    setDescription(data.weather[0].description);
    setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);

    setLoading(false);
    setReady(false);
    // document.querySelector(".info-container").classList.remove("hide");
    // document.querySelector("#loader").classList.add("hide");
  }

  return (
    <div className="App">
      <div className="main-container">
        <Header>Confira o clima de uma cidade:</Header>
        {/* <Search setInputValue={setInputValue} inputValue={inputValue} onClick={() => { */}
        <Search setCityName={setCityName} cityName={cityName} onClick={() => { 
          showWeatherData()
        }} onChange={() => {
          setReady(true);
        }} />
        {loading && <Loading />}
        {!loading && !ready && (
          <div className="info-container">
            <div className="line"></div>
            <div className='city-container'>
              <MdLocationOn />
              <p>{name}</p>
              {/* <img src="https://countryflagsapi.com/png/BR" /> */}
              {/* <img src={countryFlag} /> */}
            </div>
            <p id='temp-element'>{temperature} ˚C</p>
            <div className="description-container">
              <p id='description-element'>{description}</p>
              <img src={weatherIcon} alt="weather-icon" />
            </div>
            <div className="details-container">
              <p id='humidity'>
                <MdWaterDrop />
                <span>{humidity}%</span>
              </p>
              <div className="line-2"></div>
              <p id='wind'>
                <FaWind />
                <span>{wind}km/h</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
