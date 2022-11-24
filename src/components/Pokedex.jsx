import React from 'react';
import data from '../data';
import './pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        <h1>Pokédex</h1>
        <ul id="pokemons">
          {data.map(({ id, name, type, image }) => (
            <li key={ id }>
              <img className='pok' alt={ name } src={ image } />
              <p>{id}</p>
              <p>{name}</p>
              <p>{type}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Pokedex;
