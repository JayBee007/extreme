const getWeatherPrognosisUrl = (longitude, latitude) => {
  return `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
};

export default getWeatherPrognosisUrl;
