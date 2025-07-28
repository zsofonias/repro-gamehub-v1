import { HStack, Icon } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

import type { IGame } from '@/types/game';
import type { IconType } from 'react-icons';

type Props = {
  platforms: IGame['parent_platforms'];
};

function GamePlatforms({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={'10px'}>
      {platforms.map(({ platform }) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
}
export default GamePlatforms;
