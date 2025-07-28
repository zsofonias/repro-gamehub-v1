import useFetchData from './use-fetch-data';
import type { IGame } from '@/types/game';

type Props = {
  selectedGenreId?: number | null;
};

function useGames({ selectedGenreId }: Props) {
  // const options = useMemo(
  //   () => ({
  //     params: {
  //       genres: selectedGenreId,
  //     },
  //   }),
  //   [selectedGenreId]
  // );
  const options = {
    params: {
      genres: selectedGenreId,
    },
  };

  const {
    data: games,
    isLoading,
    error,
  } = useFetchData<IGame>('/games', options, [selectedGenreId]);
  return { games, isLoading, error };
}
export default useGames;
