import { useEffect, useContext } from 'react';
import axios from 'axios';

import StateContext from 'providers/StateContext';

import getUrl from 'utils/getUrl';
import processWeatherData from 'utils/processWeatherData';
import proccessCurrentWeatherData from 'utils/proccessCurrentWeatherData';
import getChartData from 'utils/getChartData';

const useFetchWeatherData = location => {
  const {
    initWeatherDataReq,
    setWeatherError,
    setWeatherData,
    setChartData,
    setCurrentWeatherData,
    weatherData,
    selectWeatherDay
  } = useContext(StateContext);
  const { coords } = location;
  useEffect(() => {
    let didCancel = false;
    if (location.coords === undefined) {
      setWeatherData();
      setChartData();
      setCurrentWeatherData();
      return;
    }
    const { lng, lat } = coords;

    const fetchData = async () => {
      initWeatherDataReq();
      selectWeatherDay();
      try {
        const url = getUrl('forecast', lng, lat);
        const currentWeatherUrl = getUrl('weather', lng, lat);
        const result = await axios.get(url);
        const currentWeather = await axios.get(currentWeatherUrl);
        const processedWeatherData = processWeatherData(result.data);
        const proccessedCurrentWeatherData = proccessCurrentWeatherData(
          currentWeather.data
        );
        const chartData = getChartData(result.data);

        if (!didCancel) {
          setCurrentWeatherData(proccessedCurrentWeatherData);
          setWeatherData(processedWeatherData);
          setChartData(chartData);
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
