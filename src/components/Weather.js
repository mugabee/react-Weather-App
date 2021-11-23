import { WiDaySunny } from "weather-icons-react";
const Weather = () => {
  return (
    <div className="min-h-screen  mx-4 flex items-center justify-center">
      <div className="flex border border-blue-500 rounded-3xl flex-col bg-white  p-4 w-full max-w-xs">
        <div className="font-bold text-xl">Sydney</div>
        <div className="text-sm text-gray-500">Thursday 10 May 2020</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        <WiDaySunny size={500} color='#000' />
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">24°</div>
          <div className="flex flex-col items-center ml-6">
            <div>Cloudy</div>
            {tempRange(20, 28)}
            {/* <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="text-sm font-light text-gray-500">28°C</span>
            </div>
            <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="text-sm font-light text-gray-500">20°C</span>
            </div> */}
          </div>
        </div>
      
      </div>

      
    </div>
    
  );
};

export default Weather;
function tempRange(min, max){
    return (
        <h3>
           <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="text-sm font-light text-gray-500">{min}°C</span>
            </div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="text-sm font-light text-gray-500">{max}°C</span>
            </div>
        </h3>
    );
    
}
