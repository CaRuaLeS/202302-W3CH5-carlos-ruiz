/* eslint-disable no-unused-vars */
type HasId = {
  id: number;
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

export type PokemonStructure = ProtoPokemonStructure & HasId & FavouriteList;

export class Pokemon implements PokemonStructure {
  public id: number;
  public isFavourite: boolean;

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
