import { Card, HStack, Image } from '@chakra-ui/react';
import type { IGame } from '@/types/game';

import { getCroppedImageUrl } from '@/utils/image-url';

import GamePlatforms from './game-platforms';
import GameCriticScore from './game-critic-score';

type Props = {
  game: IGame;
};

function GameCard({ game }: Props) {
  const croppedImageUrl = getCroppedImageUrl(game.background_image);

  return (
    <Card.Root>
      <Image src={croppedImageUrl} />
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
