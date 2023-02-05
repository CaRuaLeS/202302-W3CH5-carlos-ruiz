import { Header } from './components/01.header/header';
import { List } from './components/02.list/list';
import { PokeApiRepo } from './services/repository/poke.api.repo';

new Header('.root');
new List('.main', new PokeApiRepo());
