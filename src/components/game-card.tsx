import type { IGame } from '@/types/game';
import { Card, HStack, Image } from '@chakra-ui/react';
import GamePlatforms from './game-platforms';
import GameCriticScore from './game-critic-score';

type Props = {
  game: IGame;
};

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={6} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        {/* <Heading fontSize="2xl">{game.name}</Heading> */}
        <HStack justifyContent="space-between">
          <GamePlatforms platforms={game.parent_platforms} />
          <GameCriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
export default GameCard;
