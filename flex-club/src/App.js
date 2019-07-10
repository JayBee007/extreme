import React, { useContext } from 'react';

import StateContext from 'providers/StateContext';
import useFetchWeather from 'hooks/useFetchWeatherData';

import DropDown from 'components/DropDown';
import Card from 'components/Card';

import LayoutContainer from 'layout/LayoutContainer';
import FlexRow from 'layout/FlexRow';

function App() {
  const {
    setCurrentLocation,
    currentLocation,
    selectedCardId,
    selectWeatherDay
  } = useContext(StateContext);
  const [weatherData] = useFetchWeather(currentLocation);

  const handleCitySelection = selected => {
    setCurrentLocation(selected);
  };

  const handleCurrentDaySelection = id => {
    selectWeatherDay(id);
  };

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
    </LayoutContainer>
  );
}

export default App;
