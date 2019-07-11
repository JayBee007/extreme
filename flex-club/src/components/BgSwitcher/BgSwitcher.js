import styled from 'styled-components';

const bg = (deg, lum) => `${deg}, 100%, ${lum}, 0.1`;
const bgColor = props => {
  let computedBgColor = '0,0%,100%, 0.1';
  if (!props.dt) {
    return computedBgColor;
  }
  const { dt, sunset, dayTime } = props;

  const timeToSunset = sunset.getHours() - dt.getHours();
  const percentageOfDayPassed = ((dayTime - timeToSunset) / dayTime) * 100;

  if (percentageOfDayPassed <= 20) {
    computedBgColor = bg(213, '79%');
  }

  if (percentageOfDayPassed > 20 && percentageOfDayPassed <= 30) {
    computedBgColor = bg(220, '69%');
  }

  if (percentageOfDayPassed > 30 && percentageOfDayPassed <= 40) {
    computedBgColor = bg(225, '59%');
  }

  if (percentageOfDayPassed > 40 && percentageOfDayPassed <= 60) {
    computedBgColor = bg(230, '49%');
  }

  if (percentageOfDayPassed > 60 && percentageOfDayPassed <= 80) {
    computedBgColor = bg(233, '40%');
  }

  if (percentageOfDayPassed > 80 && percentageOfDayPassed <= 90) {
    computedBgColor = bg(235, '30%');
  }

  if (percentageOfDayPassed > 90 && percentageOfDayPassed <= 99) {
    computedBgColor = bg(240, '20%');
  }

  if (percentageOfDayPassed > 99) {
    computedBgColor = bg(243, '10%');
  }

  return computedBgColor;
};

const BgSwitcher = styled.div`
  height: 100%;
  background-color: hsla(${props => bgColor(props)});
`;

export default BgSwitcher;
