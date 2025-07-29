import { HStack, Image } from '@chakra-ui/react';

import logoImg from '@/assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import GameSearchInput from './game-search-input';

type Props = {
  onSearchInput: (search: string) => void;
};

function Navbar({ onSearchInput }: Props) {
  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <Image src={logoImg} boxSize="60px" />
      <GameSearchInput onSearchInput={onSearchInput} />
      <ColorModeButton />
    </HStack>
  );
}
export default Navbar;
