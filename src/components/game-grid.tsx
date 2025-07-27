import apiClient from '@/services/api-client';
import type { IFetchGamesResponse, IGame } from '@/types/game';
import { useEffect, useState } from 'react';

function GameGrid() {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<IFetchGamesResponse>('/xgames')
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
export default GameGrid;
