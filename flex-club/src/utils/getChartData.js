import calculateTime from 'utils/calculateTime';

const getChartData = (weatherData = {}) => {
  const hashMap = {};
  const { list, city } = weatherData;
  let firstDay;
  let secondDay;
  if (!list) {
    return hashMap;
  }

  for (let i = 0; i < list.length; i += 1) {
    const currentTimeSegment = list[i];
    const dt = calculateTime(currentTimeSegment.dt, city.timezone);

    const currentIteratedDate = dt.getDate();
    const hours = dt.getHours();
    const minutes = dt.getMinutes();
    const computedMinutes =
      minutes.toString().length > 1 ? minutes : `0${minutes}`;

    if (!hashMap[currentIteratedDate]) {
      // Flag to see if this segment is today
      // Need it to later add the data if 24 hrs are not complete
      if (!firstDay) {
        firstDay = currentIteratedDate;
      } else if (firstDay && !secondDay) {
        secondDay = currentIteratedDate;
      }
      hashMap[currentIteratedDate] = {
        id: currentTimeSegment.dt,
        data: [
          {
            time: `${hours}:${computedMinutes}`,
            temp: currentTimeSegment.main.temp
          }
        ]
      };
    } else if (hashMap[currentIteratedDate]) {
      hashMap[currentIteratedDate] = {
        ...hashMap[currentIteratedDate],
        data: [
          ...hashMap[currentIteratedDate].data,
          {
            time: `${hours}:${computedMinutes}`,
            temp: currentTimeSegment.main.temp
          }
        ]
      };
    }
  }

  // Api returns data in breaks of three hours so for 24 hrs
  // 24 / 3 = 8, if we have eight elements in the data array
  // means we have calculated 24hrs worth of data if not
  // we copy the remaining from next day
  if (hashMap[firstDay].data.length < 8) {
    const remainingHours = 8 - hashMap[firstDay].data.length;
    const nextDayData = hashMap[secondDay].data;

    for (let i = 0; i < remainingHours; i += 1) {
      hashMap[firstDay].data = [...hashMap[firstDay].data, nextDayData[i]];
    }
  }
  return Object.values(hashMap);
};

export default getChartData;
