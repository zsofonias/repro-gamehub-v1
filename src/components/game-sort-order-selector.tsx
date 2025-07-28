import { Button, Menu, Portal } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

import type { IGameQuery } from '@/types/game';

const sortOrders = [
  {
    slug: '',
    name: 'Relevance',
  },
  {
    slug: '-metacritic',
    name: 'Popularity ',
  },
  {
    slug: '-released',
    name: 'Release Date',
  },
  {
    slug: '-name',
    name: 'Name (desc)',
  },
  {
    slug: 'name',
    name: 'Name (asc)',
  },

  {
    slug: '-rating',
    name: 'Rating (desc)',
  },
  {
    slug: 'rating',
    name: 'Rating (asc)',
  },
];

type Props = {
  gameQuery: IGameQuery;
  onSortOrderSelect: (sortOrder: string) => void;
};

function GameSortOrderSelector({ gameQuery, onSortOrderSelect }: Props) {
  const selectedOrderName =
    sortOrders.find((order) => order.slug === gameQuery.orderBy)?.name ||
    'Relevance';
  const sortOrdersFiltered = sortOrders.filter(
    (order) => order.slug !== gameQuery.orderBy
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          Sort by: {selectedOrderName} <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrdersFiltered.map((order) => (
              <Menu.Item
                key={order.slug}
                value={order.slug}
                onClick={() => onSortOrderSelect(order.slug)}
              >
                {order.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
export default GameSortOrderSelector;
