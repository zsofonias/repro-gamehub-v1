import type { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

function GameCardContainer({ children }: PropsWithChildren) {
  return (
    <Box
      width={{
        base: '260px',
        // sm: '220px',
        md: '300px',
      }}
      borderRadius={8}
      overflow="hidden"
    >
      {children}
    </Box>
  );
}
export default GameCardContainer;
