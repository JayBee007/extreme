/* eslint-disable no-debugger */
import { useEffect, useContext } from 'react';
import axios from 'axios';

import StateContext from 'providers/StateContext';

import getWeatherPrognosisUrl from 'utils/getWeatherPrognosisUrl';
import processWeatherData from 'utils/processWeatherData';
import getChartData from 'utils/getChartData';

const useFetchWeatherData = location => {
  const {
    initWeatherDataReq,
    setWeatherError,
    setWeatherData,
    setChartData,
    weatherData,
    selectWeatherDay
  } = useContext(StateContext);
  const { coords } = location;
  useEffect(() => {
    let didCancel = false;
    if (location.coords === undefined) {
      setWeatherData();
      setChartData();
      return;
    }
    const { lng, lat } = coords;

    const fetchData = async () => {
      initWeatherDataReq();
      selectWeatherDay();
      try {
        const url = getWeatherPrognosisUrl(lng, lat);
        const result = await axios.get(url);
        const processedWeatherData = processWeatherData(result.data);
        const chartData = getChartData(result.data);

        if (!didCancel) {
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
