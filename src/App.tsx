import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/navbar';
import GameGrid from './components/game-grid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="aside" bg="gray" display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
