import "./style.scss";
import { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [city, setCity] = useState("Monaco");
  const [desc, setDesc] = useState("temps orange");
  const [temperature, setTemperature] = useState("10");
  const [inputValue, setInputValue] = useState("");

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const apikey = process.env.REACT_APP_API_KEY;
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
