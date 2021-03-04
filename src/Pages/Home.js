import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

function Home() {
  const [citySearched, setCitySearched] = useState('');

  const [getWeather, {loading, data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {name: citySearched},
  });

  if (error) return <h2>Il y a une erreur</h2>
  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h1>Mon application Météo</h1>
      <input 
        type="text" 
        placeholder="Nom de la ville..."
        onChange={(event) => setCitySearched(event.target.value)} 
      />
      <button onClick={() => getWeather()}>Rechercher</button>
    </div>
  )
}

export default Home;
