import { useState } from 'react';
import { Box, Center, Flex, Grid, GridItem } from '@chakra-ui/react';

import Navbar from './components/navbar';
import GamesGrid from './components/games-grid';
import GenreList from './components/genre-list';
import GamePlatformSelector from './components/game-platform-selector';
import type { IGameQuery } from './types/game';

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  const handleGenreSelect = (genreId: number) => {
    setGameQuery({
      ...gameQuery,
      genreId: genreId === gameQuery.genreId ? undefined : genreId,
    });
  };

  const handlePlatformSelect = (platformId: number) => {
    setGameQuery({
      ...gameQuery,
      platformId: platformId === 9999 ? undefined : platformId,
    });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem
        area="aside"
        marginTop={2}
        paddingX={5}
        display={{ base: 'none', lg: 'block' }}
      >
        <GenreList gameQuery={gameQuery} onGenreSelect={handleGenreSelect} />
      </GridItem>

      <GridItem area="main" marginTop={2}>
        <Center>
          <Box>
            <Flex justifyContent="flex-start">
              <GamePlatformSelector
                gameQuery={gameQuery}
                onPlatformSelect={handlePlatformSelect}
              />
            </Flex>
            <Center marginTop={5}>
              <GamesGrid gameQuery={gameQuery} />
            </Center>
          </Box>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
