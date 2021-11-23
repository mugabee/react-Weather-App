import { WiDaySunny } from "weather-icons-react";
const Weather = () => {
  return (
    <div class="min-h-screen  mx-4 flex items-center justify-center">
      <div class="flex border border-blue-500 rounded-3xl flex-col bg-white  p-4 w-full max-w-xs">
        <div class="font-bold text-xl">Sydney</div>
        <div class="text-sm text-gray-500">Thursday 10 May 2020</div>
        <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        <WiDaySunny size={500} color='#000' />
        </div>
        <div class="flex flex-row items-center justify-center mt-6">
          <div class="font-medium text-6xl">24°</div>
          <div class="flex flex-col items-center ml-6">
            <div>Cloudy</div>
            {tempRange(20, 28)}
            {/* <div class="mt-1">
              <span class="text-sm">
                <i class="far fa-long-arrow-up"></i>
              </span>
              <span class="text-sm font-light text-gray-500">28°C</span>
            </div>
            <div>
              <span class="text-sm">
                <i class="far fa-long-arrow-down"></i>
              </span>
              <span class="text-sm font-light text-gray-500">20°C</span>
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
              <span class="text-sm">
                <i class="far fa-long-arrow-down"></i>
              </span>
              <span class="text-sm font-light text-gray-500">{min}°C</span>
            </div>
            <div class="mt-1">
              <span class="text-sm">
                <i class="far fa-long-arrow-up"></i>
              </span>
              <span class="text-sm font-light text-gray-500">{max}°C</span>
            </div>
        </h3>
    );
    
}
