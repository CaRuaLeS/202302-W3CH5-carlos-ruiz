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

  async getPokemon(id: PokemonStructure['id']): Promise<PokemonStructure> {
    const url = this.url + '/' + id;
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokemonStructure;
    return data;
  }

  async update(pokemon: Partial<PokemonStructure>): Promise<PokemonStructure> {
    const url = this.url + '/' + pokemon.id;
    const resp = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as PokemonStructure;
    return data;
  }
}
