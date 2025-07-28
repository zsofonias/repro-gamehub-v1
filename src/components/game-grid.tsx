import useGames from '@/hooks/useGames';
import { Center, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './game-card';

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <Center>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
          }}
          gap={10}
          padding="10px"
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}
export default GameGrid;
