import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Navbar from './components/navbar';
import GamesGrid from './components/games-grid';
import GenreList from './components/genre-list';

function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>();

  const handleGenreSelect = (genreId: number) => {
    setSelectedGenreId(genreId);
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
        <GamesGrid selectedGenreId={selectedGenreId} />
      </GridItem>
    </Grid>
  );
}

export default App;
