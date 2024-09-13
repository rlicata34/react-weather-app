import { getCurrentWeather } from "../components/api/index";
import WeatherIcon from "./WeatherIcon";
import "../styles/components/CurrentWeather.scss";

function CurrentWeather() {
  const data = getCurrentWeather();
  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  const otherInfoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipitation",
      value: Math.round(precipitation.total),
      unit: "in/h",
    },
    {
      id: 1,
      icon: "wind",
      name: "wind",
      value: Math.round(wind.speed),
      unit: "mph",
    },
    {
      id: 2,
      icon: "moisture",
      name: "humidity",
      value: Math.round(humidity),
      unit: "%",
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: "",
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: "%",
    },
    {
      id: 5,
      icon: "eye",
      name: "visibility",
      value: Math.round(visibility),
      unit: "mi",
    }
  ]

  return (
    <div className="CurrentWeather">
      <div className="temperature">
        <div className="weather-icon">
          <WeatherIcon iconNumber={icon_num} summary={summary} />
        </div>
        <div className="value">
          <div className="real">{temperature} °C</div>
          <div className="feels_like">feels like {feels_like} °C</div>
        </div>
        <div className="summary">{summary}</div>
      </div>
      <div className="other-infos">
        {otherInfoWidgets.map(({id, icon, name, value, unit}) =>
          <div className="widget" key={id}>
            <div className="widget-container">
              <div className="info">
                <div className="icon">
                  <i className={`bi bi-${icon}`}></i>
                </div>
                <div className="value">
                  {value} {unit}
                </div>
              </div>
              <div className="name">{name}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;