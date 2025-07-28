import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '@/services/api-client';

import type { IFetchResponse } from '@/types/types';

function useFetchData<T>(endpoint: string, options?: any) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // const MIN_SKELETON_DISPLAY_MS = 500;

  useEffect(() => {
    const controller = new AbortController();

    // const startTime = Date.now();
    setIsLoading(true);
    apiClient
      .get<IFetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...options,
      })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        // if (err.name === 'AbortError') return;
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 500);
        // const elapsed = Date.now() - startTime;
        // const remaining = MIN_SKELETON_DISPLAY_MS - elapsed;

        // setTimeout(() => {
        //   setIsLoading(false);
        // }, Math.max(0, remaining));
      });

    return () => {
      controller.abort();
    };
  }, [endpoint, options]);

  return { data, isLoading, error };
}
export default useFetchData;
