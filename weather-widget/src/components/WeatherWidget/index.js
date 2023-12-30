import "./style.scss";

export default function WeatherWidget() {
  return (
    <div className="weather-widget">
      <div className="weather-widget__infos">
        <p className="weather-widget__city">Monaco</p>
        <p className="weather-widget__desc">temps saharien</p>
      </div>
      <p className="weather-widget__temperature">
        <span>25</span>
        <sup>°C</sup>
      </p>
      <input
        className="weather-widget__input"
        type="text"
        placeholder="Votre Ville"
        value={null}
      />
    </div>
  );
}
