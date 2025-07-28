import { useState } from 'react';
import { Box, Center, Flex, Grid, GridItem } from '@chakra-ui/react';

import Navbar from './components/navbar';
import GamesGrid from './components/games-grid';
import GenreList from './components/genre-list';
import GamePlatformSelector from './components/game-platform-selector';

function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>();
  const [selectedPlatformId, setSelectedPlatformId] = useState<
    number | undefined
  >();

  const handleGenreSelect = (genreId: number) => {
    if (selectedGenreId === genreId) return setSelectedGenreId(undefined);
    setSelectedGenreId(genreId);
  };

  const handlePlatformSelect = (platformId: number) => {
    if (platformId === 9999) return setSelectedPlatformId(undefined);
    setSelectedPlatformId(platformId);
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
        <GenreList
          onGenreSelect={handleGenreSelect}
          selectedGenreId={selectedGenreId}
        />
      </GridItem>

      <GridItem area="main" marginTop={2}>
        <Center>
          <Box>
            <Flex justifyContent="flex-end">
              <GamePlatformSelector
                selectedPlatformId={selectedPlatformId}
                onPlatformSelect={handlePlatformSelect}
              />
            </Flex>
            <Center marginTop={5}>
              <GamesGrid
                selectedGenreId={selectedGenreId}
                selectedPlatformId={selectedPlatformId}
              />
            </Center>
          </Box>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
