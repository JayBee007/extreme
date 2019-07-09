import React, { useContext } from 'react';

import StateContext from 'providers/StateContext';
import useFetchWeather from 'hooks/useFetchWeatherData';

import DropDown from 'components/DropDown';
import Card from 'components/Card';

import LayoutContainer from 'layout/LayoutContainer';
import FlexRow from 'layout/FlexRow';

import processWeatherData from 'utils/processWeatherData';

function App() {
  const { setLocation, currentLocation } = useContext(StateContext);
  const [weatherData] = useFetchWeather(currentLocation);
  const processedWeatherData = processWeatherData(weatherData);

  const handleCitySelection = selected => {
    setLocation(selected);
  };

  const handleCurrentDaySelection = id => {
    // eslint-disable-next-line no-console
    console.log('id', id);
  };

  return (
    <LayoutContainer>
      <DropDown onChange={handleCitySelection} />
      <FlexRow paddingTop="2.5rem">
        {Object.values(processedWeatherData).map(weatherItem => {
          return (
            <Card
              key={weatherItem.id}
              id={weatherItem.id}
              day={weatherItem.day}
              temp={weatherItem.temp}
              desc={weatherItem.weather.description}
              onClick={handleCurrentDaySelection}
            />
          );
        })}
      </FlexRow>
    </LayoutContainer>
  );
}

export default App;
