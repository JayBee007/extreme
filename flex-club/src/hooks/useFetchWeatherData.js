import { useEffect, useContext } from 'react';
import axios from 'axios';

import StateContext from 'providers/StateContext';

const useFetchWeatherData = location => {
  const {
    initWeatherDataReq,
    setWeatherError,
    setWeatherData,
    weatherData
  } = useContext(StateContext);
  const { coords } = location;
  useEffect(() => {
    let didCancel = false;
    if (location.coords === undefined) {
      setWeatherData({});
      return;
    }
    const { lng, lat } = coords;
    const getWeatherPrognosisUrl = (longitude, latitude) => {
      return `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    };

    const fetchData = async () => {
      initWeatherDataReq();
      try {
        const url = getWeatherPrognosisUrl(lng, lat);
        const result = await axios.get(url);
        if (!didCancel) {
          setWeatherData(result.data);
        }
      } catch (err) {
        if (!didCancel) {
          setWeatherError();
        }
      }
    };
    fetchData();
    // eslint-disable-next-line consistent-return
    return () => {
      didCancel = true;
      return didCancel;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.value]);
  return [weatherData];
};

export default useFetchWeatherData;
