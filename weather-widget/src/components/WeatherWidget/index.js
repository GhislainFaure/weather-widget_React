import "./style.scss";
import { useState } from "react";

export default function WeatherWidget() {
  const [city, setCity] = useState("Monaco");
  const [desc, setDesc] = useState("temps orange");
  const [temperature, setTemperature] = useState("10");
  const [inputValue, setInputValue] = useState("");

  // const handleSubmit = () => {};
  return (
    <div className="weather-widget">
      <div className="weather-widget__infos">
        <p className="weather-widget__city">{city}</p>
        <p className="weather-widget__desc">{desc}</p>
      </div>
      <p className="weather-widget__temperature">
        <span>{temperature}</span>
        <sup>°C</sup>
      </p>
      <input
        className="weather-widget__input"
        type="text"
        placeholder="Votre Ville"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        // onSubmit={handleSubmit}
      />
    </div>
  );
}
