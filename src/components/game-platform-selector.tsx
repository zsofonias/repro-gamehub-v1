import { Button, Menu, Portal } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

import useGamePlatforms from '@/hooks/use-game-platforms';
import type { IGameQuery } from '@/types/game';

type Props = {
  gameQuery: IGameQuery;
  onPlatformSelect: (platformId: number) => void;
};

function GamePlatformSelector({ gameQuery, onPlatformSelect }: Props) {
  const { platforms, isLoading, error } = useGamePlatforms();

  const platformsList = [
    {
      id: 9999,
      name: 'All',
      slug: 'all',
    },
    ...platforms,
  ];

  const selectedPlatformName =
    platformsList.find((platform) => platform.id === gameQuery?.platformId)
      ?.name || 'Platforms';

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          {selectedPlatformName} <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {isLoading && <Menu.Item value="loading">Loading...</Menu.Item>}
            {platformsList?.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => onPlatformSelect(platform.id)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
export default GamePlatformSelector;
