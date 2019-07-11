import calculateTime from 'utils/calculateTime';

const proccessCurrentWeatherData = (currentWeatherData = {}) => {
  const dt = calculateTime(currentWeatherData.dt, currentWeatherData.timezone);
  const sunrise = calculateTime(
    currentWeatherData.sys.sunrise,
    currentWeatherData.timezone
  );
  const sunset = calculateTime(
    currentWeatherData.sys.sunset,
    currentWeatherData.timezone
  );

  // might be buggy since sun might not set in summers=)
  const dayTime = sunset.getHours() - sunrise.getHours();

  const isNight = dt.getHours() > sunset.getHours();
  const isAfternoon = dt.getHours() > 12;

  return {
    isNight,
    isAfternoon,
    dayTime,
    dt,
    sunset,
    sunrise
  };
};

export default proccessCurrentWeatherData;
