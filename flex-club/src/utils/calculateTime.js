const calculateTime = (utcDate, offset) => {
  const localDate = new Date(utcDate * 1000);
  const localTime = localDate.getTime();
  const localOffset = localDate.getTimezoneOffset() * 60000;
  const utcTime = localTime + localOffset;
  const targetOffset = offset / 60 / 60;

  // eslint-disable-next-line prettier/prettier
  const targetTime = utcTime + 3600000 * targetOffset;

  return new Date(targetTime);
};

export default calculateTime;
