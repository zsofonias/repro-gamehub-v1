import useGames from '@/hooks/use-games';
import { Center, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './game-card';
import GameCardContainer from './game-card-container';
import GameCardSkeleton from './game-card-skeleton';

function GamesGrid() {
  const { games, isLoading, error } = useGames();

  const skeletons = Array.from({ length: 6 }, (_, i) => i);

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <Center>
        {isLoading && (
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 3 }}
            gap={8}
            padding="10px"
          >
            {skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        )}

        {!isLoading && (
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 3 }}
            gap={8}
            padding="10px"
            // style={{
            //   transition: 'opacity 0.3s ease-in-out',
            //   opacity: isLoading ? 0 : 1,
            // }}
          >
            {games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        )}
      </Center> */}

      <Center>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 3,
          }}
          gap={8}
          padding="10px"
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
      </Center>
    </>
  );
}
export default GamesGrid;
