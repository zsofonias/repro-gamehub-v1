import { HStack, Image, Text } from '@chakra-ui/react';

import logoImg from '@/assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';

function Navbar() {
  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <Image src={logoImg} boxSize="60px" />
      <Text>Game Hub</Text>
      <ColorModeButton />
    </HStack>
  );
}
export default Navbar;
