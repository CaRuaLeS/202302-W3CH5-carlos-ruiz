import { Header } from './components/01.header/header';
import { PokeApiRepo } from './services/repository/poke.api.repo';

new Header('.root');

const repo = new PokeApiRepo();
repo.loadPokemons().then((data) => {
  console.log(data.next);
});
