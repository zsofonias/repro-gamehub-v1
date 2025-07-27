import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/navbar';

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

      <GridItem area="aside" bg="gold" display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>

      <GridItem area="main" bg="lightgreen">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
