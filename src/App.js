import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import { WiDaySunny } from 'weather-icons-react';

function App() {
  return (
    <div className="App">
      <Weather />
      <WiDaySunny size={24} color='#000' />
    </div>
  );
}

export default App;
