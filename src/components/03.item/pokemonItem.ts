import { PokemonStructure } from '../../models/pokemon';
import { Component } from '../00.component/component';

export class PokemonItem extends Component {
  constructor(
    public selector: string,
    public pokemon: PokemonStructure,
    public updateStructure: (task: PokemonStructure) => void
  ) {
    super();
    this.pokemon = { ...pokemon };
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return `
      <li class="pokemon-item">
        <img src="${this.pokemon.sprites.front_default}" alt="Pokemon ${this.pokemon.name}">
        <div class"pokemon-list__name">${this.pokemon.name}</div>
        <div class"pokemon-list__type">${this.pokemon.types[0].type.name}</div>

      </li>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
