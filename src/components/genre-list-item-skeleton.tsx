import { HStack, Stack, Skeleton } from '@chakra-ui/react';

function GenreListItemSkeleton() {
  return (
    <HStack gap="2">
      <Skeleton height="35px" width="35px" />
      <Stack flex="1">
        <Skeleton height="5" width="80%" />
      </Stack>
    </HStack>
  );
}
export default GenreListItemSkeleton;
