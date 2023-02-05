/* eslint-disable no-unused-vars */
type HasId = {
  id: number;
};

type ProtoPokemonList = {
  next: string;
  previous: string;
};

type ProtoPokemonStructure = {
  name: string;
  image: string;
  types: string;
  abilities: string;
  stats: string;
  weight: number;
};

type FavouriteList = {
  isFavourite: boolean;
};

export type PokemonStructure = ProtoPokemonStructure &
  HasId &
  FavouriteList &
  ProtoPokemonList;

export class Pokemon implements PokemonStructure {
  public id: number;
  public isFavourite: boolean;
  public next: string;
  public previous: string;

  constructor(
    public name: string,
    public image: string,
    public types: string,
    public abilities: string,
    public stats: string,
    public weight: number
  ) {
    this.isFavourite = false;
  }
}
