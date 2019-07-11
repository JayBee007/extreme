import React, { useContext } from 'react';

import StateContext from 'providers/StateContext';
import useFetchWeather from 'hooks/useFetchWeatherData';

import DropDown from 'components/DropDown';
import Card from 'components/Card';
import LineChart from 'components/LineChart';

import LayoutContainer from 'layout/LayoutContainer';
import FlexRow from 'layout/FlexRow';

function App() {
  const {
    setCurrentLocation,
    currentLocation,
    selectedCardId,
    selectWeatherDay,
    chartData
  } = useContext(StateContext);
  const [weatherData] = useFetchWeather(currentLocation);

  const handleCitySelection = selected => {
    setCurrentLocation(selected);
  };

  const handleCurrentDaySelection = id => {
    selectWeatherDay(id);
  };

  const selectChartData = chartData.filter(
    chartItem => chartItem.id === selectedCardId
  );

  return (
    <LayoutContainer>
      <DropDown onChange={handleCitySelection} />
      <FlexRow paddingTop="2.5rem">
        {Object.values(weatherData.data).map((weatherItem, index) => {
          return (
            <Card
              key={weatherItem.id}
              id={weatherItem.id}
              isSelected={
                selectedCardId === weatherItem.id || selectedCardId === index
              }
              day={weatherItem.day}
              temp={weatherItem.temp}
              desc={weatherItem.weather.description}
              onClick={handleCurrentDaySelection}
            />
          );
        })}
      </FlexRow>
      <FlexRow paddingTop="2.5rem">
        {selectChartData.length > 0 ? (
          <LineChart data={selectChartData[0].data} />
        ) : (
          chartData.length > 0 && <LineChart data={chartData[0].data} />
        )}
      </FlexRow>
    </LayoutContainer>
  );
}

export default App;
