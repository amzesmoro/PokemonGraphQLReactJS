import { gql } from '@apollo/client'

const LIST_POKEMON_QUERY = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
    }
  }
`;

export default LIST_POKEMON_QUERY;
