import { HStack, List, Image, Text } from '@chakra-ui/react';

import useGenre from '@/hooks/use-genre';
import GenreListItemSkeleton from './genre-list-item-skeleton';
import { getCroppedImageUrl } from '@/utils/image-url';

function GenreList() {
  const { genres, isLoading } = useGenre();

  const skeletons = Array.from({ length: 10 }).map((_, index) => (
    <GenreListItemSkeleton key={index} />
  ));

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
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}
export default GenreList;
