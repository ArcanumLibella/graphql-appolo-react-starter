import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

import styled from 'styled-components'

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
    <HomepageStyled>
      <div className="wrapper">
        <h1>My Weather App</h1>
        <div className="search">
          <input 
            type="text" 
            placeholder="City name ..."
            onChange={(event) => setCitySearched(event.target.value)} 
          />
          <button onClick={() => getWeather()}>Search</button>
        </div>

          {data && (
          <div className="weather">
              <h2>{ data.getCityByName.name }</h2>
              <p>Temperature : <span>{ data.getCityByName.weather.temperature.actual }</span></p>
              <p>Description : <span>{ data.getCityByName.weather.summary.description }</span></p>
              <p>Wind speed : <span>{ data.getCityByName.weather.wind.speed }</span></p>
          </div>
          )}
      </div>
    </HomepageStyled>
  )
}

const HomepageStyled = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 5%;
  text-align: center;

  .wrapper {
    width: 100%;
    max-width: 600px;
    padding: 0 24px;
  }

  .search {
    display: flex;
    margin: 32px 0;
  }

  .weather {
    margin-top: 32px;
    padding: 32px;
    background-color: white;
    border-radius: 8px;
    text-align: left;
  }

  h1 {
    color: white;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  p {
    font-weight: bold;

    span {
      font-weight: normal;
    }
  }

  input {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 8px 0 0 8px;
  }

  button {
    padding: 12px 24px;
    font-weight: bold;
    border: none;
    border-radius: 0 8px 8px 0;
    text-transform: uppercase;
  }
`

export default Home;
