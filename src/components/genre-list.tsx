import useGenre from '@/hooks/use-genre';

function GenreList() {
  const { genres, isLoading, error } = useGenre();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
export default GenreList;
