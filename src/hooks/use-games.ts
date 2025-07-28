import { useState, useEffect } from 'react';

import apiClient from '@/services/api-client';

import type { IGame, IFetchGamesResponse } from '@/types/game';
import { CanceledError } from 'axios';

function useGames() {
  const [games, setGames] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const MIN_SKELETON_DISPLAY_MS = 500;

  useEffect(() => {
    const controller = new AbortController();

    const startTime = Date.now();
    setIsLoading(true);
    apiClient
      .get<IFetchGamesResponse>('/games', { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        // if (err.name === 'AbortError') return;
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        // setIsLoading(false);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 500);
        const elapsed = Date.now() - startTime;
        const remaining = MIN_SKELETON_DISPLAY_MS - elapsed;

        setTimeout(() => {
          setIsLoading(false);
        }, Math.max(0, remaining));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, isLoading, error };
}
export default useGames;
