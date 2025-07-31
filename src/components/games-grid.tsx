import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '@/hooks/use-games';
import GameCard from './game-card';
import GameCardContainer from './game-card-container';
import GameCardSkeleton from './game-card-skeleton';
import type { IGameQuery } from '@/types/game';

type Props = {
  gameQuery?: IGameQuery;
};

function GamesGrid({ gameQuery }: Props) {
  const { games, isLoading, error } = useGames({ gameQuery });

  const skeletons = [1, 2, 3, 4, 5, 6];
  // const skeletons = Array.from({ length: 6 }, (_, i) => i);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
      }}
      justifyItems="center"
      gap={8}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer
          style={{
            transition: 'opacity 0.3s ease-in-out',
            opacity: isLoading ? 0 : 1,
          }}
          key={game.id}
        >
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}
export default GamesGrid;
