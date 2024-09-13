import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { getHourlyForecast, getDailyForecast } from "../components/api/index.js"
import "../styles/components/Main.scss";

function Main() {
    return (
        <div className="Main">
            <CurrentWeather />
            <Forecast
              type="hourly"
              title="HOURLY FORECAST"
              data={getHourlyForecast()}
            />
            <Forecast
              type="daily"
              title="21 DAYS FORECAST"
              data={getDailyForecast()}
            />
        </div>
    )
}

export default Main