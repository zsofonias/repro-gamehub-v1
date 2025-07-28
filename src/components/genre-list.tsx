import { HStack, List, Image, Button } from '@chakra-ui/react';

import useGenre from '@/hooks/use-genre';
import GenreListItemSkeleton from './genre-list-item-skeleton';
import { getCroppedImageUrl } from '@/utils/image-url';

type Props = {
  selectedGenreId?: number | null;
  onGenreSelect: (genreId: number) => void;
};

function GenreList({ selectedGenreId, onGenreSelect }: Props) {
  const { genres, isLoading, error } = useGenre();

  const skeletons = Array.from({ length: 10 }).map((_, index) => (
    <GenreListItemSkeleton key={index} />
  ));

  if (error) return null;

  return (
    <List.Root gap="3" variant="plain">
      {isLoading && skeletons}
      {genres.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={6}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button
              onClick={() => onGenreSelect(genre.id)}
              variant="ghost"
              px={0}
              fontSize="lg"
              color={selectedGenreId === genre.id ? 'purple.400' : 'inherit'}
              fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
            >
              {/* <a href={`/genres/${genre.id}`}>{genre.name}</a> */}
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}
export default GenreList;
