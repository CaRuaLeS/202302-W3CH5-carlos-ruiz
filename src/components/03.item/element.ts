import { PokemonStructure } from '../../models/pokemon';
import { Component } from '../00.component/component';

export class PokemonItem extends Component {
  constructor(
    public selector: string,
    public pokemonList: PokemonStructure,
    public updateTask: (task: TaskStructure) => void
  ) {
    super();
    this.pokemonList = { ...pokemonList };
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <li class="pokemon-item">
        <img src="" alt="Pokemon">
        <div>Pokemon name</div>
      </li>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
