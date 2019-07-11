import { useEffect, useContext, useState } from 'react';
import axios from 'axios';

import StateContext from 'providers/StateContext';

import getUrl from 'utils/getUrl';
import processWeatherData from 'utils/processWeatherData';
import proccessCurrentWeatherData from 'utils/proccessCurrentWeatherData';
import getChartData from 'utils/getChartData';

import useInterval from './useInterval';

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
  const [count, setCount] = useState(0);
  useInterval(() => setCount(count + 1), 90000);
  useEffect(() => {
    let didCancel = false;
    setChartData();
    setCurrentWeatherData();
    if (location.coords === undefined) {
      setWeatherData();
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
  }, [location.value, count]);
  return [weatherData];
};

export default useFetchWeatherData;
