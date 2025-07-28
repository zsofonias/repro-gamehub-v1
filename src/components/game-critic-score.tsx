import { Badge } from '@chakra-ui/react';

type Props = {
  score: number;
};

function GameCriticScore({ score }: Props) {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge
      width="fit"
      colorPalette={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
}
export default GameCriticScore;
