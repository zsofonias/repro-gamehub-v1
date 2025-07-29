import { useRef, useState } from 'react';
import { Button, Input, InputGroup } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

type Props = {
  onSearchInput: (search: string) => void;
};

function GameSearchInput({ onSearchInput }: Props) {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClear() {
    setSearch('');
    onSearchInput('');
    inputRef.current?.focus();
  }

  const endElement = search ? (
    <Button onClick={handleClear} size="xs" variant="subtle" me="-2">
      Clear
    </Button>
  ) : undefined;

  return (
    <InputGroup
      maxWidth={800}
      startElement={<BsSearch />}
      endElement={endElement}
    >
      <Input
        variant="subtle"
        borderRadius={10}
        placeholder="Search for a game..."
        ref={inputRef}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearchInput(inputRef.current?.value || '');
          }
        }}
      />
    </InputGroup>
  );
}
export default GameSearchInput;
