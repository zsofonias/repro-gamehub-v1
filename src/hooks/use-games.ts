import useFetchData from './use-fetch-data';
import type { IGame } from '@/types/game';

type Props = {
  selectedGenreId?: number | null;
  selectedPlatformId?: number | null;
};

function useGames({ selectedGenreId, selectedPlatformId }: Props) {
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
      platforms: selectedPlatformId,
    },
  };

  const {
    data: games,
    isLoading,
    error,
  } = useFetchData<IGame>('/games', options, [
    selectedGenreId,
    selectedPlatformId,
  ]);
  return { games, isLoading, error };
}
export default useGames;
