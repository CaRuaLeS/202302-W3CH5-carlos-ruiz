/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { PokemonStructure } from '../../models/pokemon';
import { Component } from '../00.component/component';
import { PokemonItem } from '../03.item/pokemonItem';
import { PokeApiRepo } from '../../services/repository/poke.api.repo';

export class List extends Component {
  public pokemons: PokemonStructure[];
  constructor(public selector: string, public repo: PokeApiRepo) {
    super();
    this.pokemons = [];
    this.template = this.createTemplate();
    this.render('afterbegin');
    this.load();
  }

  async load() {
    this.pokemons = await this.repo.loadPokemons();
    this.render('afterbegin');
  }

  async updatePokemon(poke: PokemonStructure) {
    const finalPokemon = await this.repo.update(poke);
    this.pokemons = this.pokemons.map((item) =>
      item.id === poke.id ? finalPokemon : item
    );
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('main') as HTMLElement).innerHTML = '';
    super.render(place);
    this.pokemons.forEach((item) => {
      new PokemonItem('.pokemon-list', item, this.updatePokemon.bind(this));
    });
  }

  createTemplate() {
    return `
    <ul class="pokemon-list">
    </ul>`;
  }
}
