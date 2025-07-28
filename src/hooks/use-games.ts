import useFetchData from './use-fetch-data';
import type { IGame } from '@/types/game';

function useGames() {
  const { data: games, isLoading, error } = useFetchData<IGame>('/games');
  return { games, isLoading, error };
}
export default useGames;
