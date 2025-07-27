import { HStack, Image, Text } from '@chakra-ui/react';

import logoImg from '@/assets/logo.webp';

function Navbar() {
  return (
    <HStack>
      <Image src={logoImg} boxSize="60px" />
      <Text>Game Hub</Text>
    </HStack>
  );
}
export default Navbar;
