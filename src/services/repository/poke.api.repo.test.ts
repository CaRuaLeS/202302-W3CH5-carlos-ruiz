import { PokeApiRepo } from './poke.api.repo';

describe('When we have the Api repo created', () => {
  let repo: PokeApiRepo;
  beforeEach(() => {
    repo = new PokeApiRepo();
  });
  test('Then it should load the api', () => {
    console.log(repo.loadPokemons);
  });
  test('Then it should load the api', () => {
    console.log(repo.getPokemon);
  });
});
