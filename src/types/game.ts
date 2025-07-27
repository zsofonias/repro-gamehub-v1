export interface IGame {
  id: number;
  name: string;
}

export interface IFetchGamesResponse {
  count: number;
  results: IGame[];
}
