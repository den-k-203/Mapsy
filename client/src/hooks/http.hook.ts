import { useCallback, useState } from "react";

export const useHttp = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async (url: string, method: string = "GET", body: any | null = null, headers: HeadersInit | any = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        if (!response.ok) {
          console.log(data);
          throw new Error(data.message || "Невідома помилка.");
        }
        setLoading(false);

        return data;
      } catch (error) {
        setLoading(false);
        const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
        setError(errorMessage);
        throw error;
      }
    },
    []);
  const clearError = useCallback(() => setError(null), []);
  return { loading, request, error, clearError };
};