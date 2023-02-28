import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Components
import Header from './components/Header';
import Search from './components/Search';
import Loading from './components/Loading';

// Icons
import { MdLocationOn } from 'react-icons/md';
import { MdWaterDrop } from 'react-icons/md';
import { FaWind } from 'react-icons/fa';

function App() {
  const [cityName, setCityName] = useState('');
  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
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
    
    try {
      setLoading(true);
      setHasError(false);
      
      return await axios.get(ApiWeatherURL);
    } catch (error) {
      setHasError(true);
      return {error};
    } finally {
      setLoading(false);
    }
  }

  const showWeatherData = async () => {
    const { data, error } = await getWeatherData(cityName);

    if (!hasError) {
      setCountryFlag(`https://flagcdn.com/16x12/${data.sys.country}.png`);
  
      setName(cityName);
  
      setTemperature(parseInt(data.main.temp));
      setDescription(data.weather[0].description);
      setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
    }

    setReady(false);
  }

  return (
    <div className="App">
      <div className="main-container">
        <Header>Confira o clima de uma cidade:</Header>
        <Search setCityName={setCityName} cityName={cityName} onClick={() => { 
          showWeatherData()
        }} onChange={() => {
          setReady(true);
        }} />
        {loading && <Loading />}
        {!loading && hasError && <p>Cidade não encontrada</p>}
        {!loading && !ready && (
          <div className="info-container">
            <div className="line"></div>
            <div className='city-container'>
              <MdLocationOn />
              <p>{name}</p>
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
