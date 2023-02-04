import { Component } from '../00.component/component';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <header>
      <h1>Lista de Pokemons</h1>
    </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
