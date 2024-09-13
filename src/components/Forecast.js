import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";
import "../styles/components/Forecast.scss";

function Forecast({ title, type, data }) {
  console.log()
  return  (
    <div className="Forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <div className="widget-container">
          {data.map((singleData) => (
            <div>
              {type === "hourly" ? (
                  <HourlyForecastWidget data={singleData} />
              ) : (
                  <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;