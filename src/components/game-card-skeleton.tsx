import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={3} />
      </Card.Body>
    </Card.Root>
  );
}
export default GameCardSkeleton;
