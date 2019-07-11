/* eslint-disable yoda */
import calculateTime from 'utils/calculateTime';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const processWeatherData = (weatherData = {}) => {
  const hashMap = {};

  const { list, city } = weatherData;

  if (!list) {
    return hashMap;
  }

  // collect the data for five days
  for (let i = 0; i < list.length; i += 1) {
    const currentTimeSegment = list[i];
    const dt = calculateTime(currentTimeSegment.dt, city.timezone);
    // check if we already have 5 days of data
    const isFiveDaysData = Object.keys(hashMap).length < 5;

    const currentIteratedDate = dt.getDate();

    // if previously we have not seen this date, make a new object for it
    // else if just update the values if its
    if (!hashMap[currentIteratedDate] && isFiveDaysData) {
      hashMap[currentIteratedDate] = {
        id: currentTimeSegment.dt,
        temp: currentTimeSegment.main.temp,
        weather: {
          ...currentTimeSegment.weather[0]
        },
        day: days[dt.getDay()]
      };
    } else if (
      !!hashMap[currentIteratedDate] &&
      isFiveDaysData &&
      (dt.getHours() >= 9 && dt.getHours() <= 12)
    ) {
      hashMap[currentIteratedDate] = {
        ...hashMap[currentIteratedDate],
        temp: currentTimeSegment.main.temp,
        weather: {
          ...currentTimeSegment.weather[0]
        }
      };
    }
  }

  return hashMap;
};

export default processWeatherData;
