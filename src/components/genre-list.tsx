import { HStack, List, Image, Button, Heading } from '@chakra-ui/react';

import useGenre from '@/hooks/use-genre';
import GenreListItemSkeleton from './genre-list-item-skeleton';
import { getCroppedImageUrl } from '@/utils/image-url';
import type { IGameQuery } from '@/types/game';

type Props = {
  gameQuery: IGameQuery;
  onGenreSelect: (genreId: number) => void;
};

function GenreList({ gameQuery, onGenreSelect }: Props) {
  const { genres, isLoading, error } = useGenre();

  const skeletons = Array.from({ length: 10 }).map((_, index) => (
    <GenreListItemSkeleton key={index} />
  ));

  if (error) return null;

  return (
    <>
      <Heading my={2} as="h2" fontSize="xl" fontWeight="bold" mb={5}>
        Genres
      </Heading>
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
                color={
                  gameQuery?.genreId === genre.id ? 'purple.400' : 'inherit'
                }
                fontWeight={gameQuery?.genreId === genre.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}
export default GenreList;
