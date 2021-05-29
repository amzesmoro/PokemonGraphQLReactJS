import { gql } from '@apollo/client'

export const DETAIL_POKEMON_QUERY = gql`
  query pokemon($name: String)  {
    pokemon(name: $name) {
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        } 
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
      } 
      evolutionRequirements {
        amount
        name
      } 
      maxHP
      image      
    }
  }
`;

export default DETAIL_POKEMON_QUERY;