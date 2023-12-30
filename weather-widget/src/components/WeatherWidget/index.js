import "./style.scss";
import { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [city, setCity] = useState("Monaco");
  const [desc, setDesc] = useState("temps orange");
  const [temperature, setTemperature] = useState("10");
  const [inputValue, setInputValue] = useState("");

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apikey = "3f31e39676524d90deea984395031598";
  useEffect(() => {
    fetch(`${baseUrl}?q=${city}&units=metric&appid=${apikey}&lang=fr`)
      .then((response) => response.json())
      .then((data) => {
        setDesc(data.weather[0].description);
        const temp = Math.round(data.main.temp);
        setTemperature(temp);
      })
      .catch((error) => console.log(error));
  }, [city]);

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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCity(inputValue);
          setInputValue("");
        }}
        className="weather-widget__form"
      >
        <input
          className="weather-widget__input"
          type="text"
          placeholder="Votre Ville"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </form>
    </div>
  );
}
