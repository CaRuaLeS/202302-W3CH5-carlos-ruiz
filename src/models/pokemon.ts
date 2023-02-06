/* eslint-disable no-unused-vars */
type HasId = {
  id: number;
};
type ProtoPokemonList = {
  results: object;
};

type ProtoPokemonStructure = {
  name: string;
  image: string;
  types: any;
  type: any;
  abilities: string;
  stats: string;
  weight: number;
  sprites: any;
};

type FavouriteList = {
  isFavourite: boolean;
};

export type PokemonStructure = ProtoPokemonStructure &
  HasId &
  FavouriteList &
  ProtoPokemonList;

export class Pokemon implements PokemonStructure {
  public isFavourite: boolean;
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public types: string,
    public abilities: string,
    public stats: string,
    public weight: number,
    public results: object,
    public sprites: any,
    public type: any
  ) {
    this.isFavourite = false;
  }
}
