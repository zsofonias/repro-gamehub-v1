import useFetchData from './use-fetch-data';
import type { IGame } from '@/types/game';
import type { IGameQuery } from '@/types/game';

type Props = {
  gameQuery?: IGameQuery | undefined;
};

function useGames({ gameQuery }: Props) {
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
      genres: gameQuery?.genreId,
      platforms: gameQuery?.platformId,
      ordering: gameQuery?.orderBy,
      search: gameQuery?.search,
    },
  };

  const {
    data: games,
    isLoading,
    error,
  } = useFetchData<IGame>('/games', options, [
    gameQuery?.genreId,
    gameQuery?.platformId,
    gameQuery?.orderBy,
    gameQuery?.search,
  ]);
  return { games, isLoading, error };
}
export default useGames;
