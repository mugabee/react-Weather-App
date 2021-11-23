import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import { WiDaySunny } from 'weather-icons-react';

const API_KEY="694d861285b8d07599d35fe33b42ba8d"

// api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

   getWeather= async () =>{
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}
    `);
    const response = await api_call.json();
    console.log(response);
  };
  rander(){
  return (
    <div className="App">
      <Weather />
      <WiDaySunny size={24} color='#000' />
    </div>
  );
}
}
export default App;