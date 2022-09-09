import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import SearchResults from "./components/SearchResults";
import TimeLocation from "./components/TimeLocation";
import TemperatureResults from "./components/TemperatureResults";
import ForecastResult from "./components/ForecastResult";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "London" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400  ">
      <TopButtons />
      <SearchResults />

      <TimeLocation />
      <TemperatureResults />

      <ForecastResult title="hourly forecast" />
      <ForecastResult title="daily forecast" />
    </div>
  );
}

export default App;
