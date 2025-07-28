import useFetchData from '@/hooks/use-fetch-data';
import type { IGenre } from '@/types/genre';

function useGenre() {
  const { data: genres, isLoading, error } = useFetchData<IGenre>('/genres');
  return { genres, isLoading, error };
}
export default useGenre;
