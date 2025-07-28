import type { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  style?: React.CSSProperties;
};

function GameCardContainer({ children, style }: PropsWithChildren<Props>) {
  return (
    <Box
      width={{
        base: '260px',
        // sm: '220px',
        md: '300px',
      }}
      borderRadius={8}
      overflow="hidden"
      style={style}
    >
      {children}
    </Box>
  );
}
export default GameCardContainer;
