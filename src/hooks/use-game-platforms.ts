import type { IPlatform } from '@/types/game';
import useFetchData from './use-fetch-data';

function useGamePlatforms() {
  const {
    data: platforms,
    isLoading,
    error,
  } = useFetchData<IPlatform>('/platforms/lists/parents');
  return {
    platforms,
    isLoading,
    error,
  };
}
export default useGamePlatforms;
