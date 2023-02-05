import { PokemonStructure } from '../../models/pokemon';

export class PokeApiRepo {
  url: string;
  constructor(public storeName: string = 'Pokemons') {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async loadPokemons(): Promise<PokemonStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokemonStructure[];
    return data;
  }
}
