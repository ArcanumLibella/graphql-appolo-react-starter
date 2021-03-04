import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

function Home() {
  const [citySearched, setCitySearched] = useState('');

  const [getWeather, { data, error  }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {name: citySearched},
  });

  if (error) return <h2>Error found</h2>
  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h1>My Weather App</h1>
      <input 
        type="text" 
        placeholder="City name ..."
        onChange={(event) => setCitySearched(event.target.value)} 
      />
      <button onClick={() => getWeather()}>Search</button>

      <div className="weather">
        {data && (
          <>
            <h2>{ data.getCityByName.name }</h2>
            <p>Temperature : { data.getCityByName.weather.temperature.actual }</p>
            <p>Description : { data.getCityByName.weather.summary.description }</p>
            <p>Wind speed : { data.getCityByName.weather.wind.speed }</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Home;
