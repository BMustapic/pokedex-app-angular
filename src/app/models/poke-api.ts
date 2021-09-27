export interface IPokeApiResult {
  count: number;
  next: string;
  previous: string;
  results: IPokeApiPokemon[];
}

export interface IPokeApiPokemon {
  name: string;
  url: string;
}

export interface IPokemon {
  types: { type: { name: string } }[];
  name: string;
  height: number;
  weight: number;
  sprites: { [key: string]: string };
}

export interface IPokemonSpecies {
  is_default: boolean;
  pokemon: IPokeApiPokemon;
}

export interface IPokeCard {
  name: string;
  id: number;
  image: string;
}
