import { useState, useEffect } from 'react';

import apiClient from '@/services/api-client';

import type { IGame, IFetchGamesResponse } from '@/types/game';
import { CanceledError } from 'axios';

function useGames() {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<IFetchGamesResponse>('/games', { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        // if (err.name === 'AbortError') return;
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
}
export default useGames;
