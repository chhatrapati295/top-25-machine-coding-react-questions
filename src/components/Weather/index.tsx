import { useEffect, useState } from "react";

interface OpenMeteoForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_weather?: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };

  daily?: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
  };

  daily_units?: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum: string;
  };
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<OpenMeteoForecastResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const getWeatherData = async (latitude: number, longitude: number) => {
    setLoading(true);
    try {
      const url = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum`
      );
      const res = await url.json();
      console.log("res", res);
      return res || {};
    } catch (err) {
      console.error("Something went wrong", err);
      return {};
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const locData = position?.coords;
      const { latitude, longitude } = locData;
      const weatherApiRes = await getWeatherData(latitude, longitude);
      setWeatherData(weatherApiRes);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-semibold">Weather app</h1>{" "}
      {loading && (
        <div className="text-gray-400 text-sm">Fetching weather data .....</div>
      )}
      {weatherData?.current_weather && !loading ? (
        <div className="flex flex-col gap-2">
          <p>Temp : {weatherData?.current_weather?.temperature || "N/A"}</p>
        </div>
      ) : (
        <p>No Weather data available!</p>
      )}
    </div>
  );
};

export default Weather;
