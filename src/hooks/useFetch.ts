import useSWR from "swr";
import api from "../services/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFetch = <Data = any, Error = any>(url: string) => {
  const { data, error, mutate, isValidating } = useSWR<Data, Error>(
    url,
    async _url => {
      if (!api?.defaults?.headers?.common?.Authorization) {
        const authToken = localStorage.getItem("auth:token");
        api.defaults.headers.common.Authorization = `Bearer ${authToken}`;
      }

      const { data: _data } = await api.get(_url);

      return _data;
    },
    {
      revalidateOnReconnect: true,
      onError: (_error: any) => {
        if (_error?.response?.status === 401) {
          localStorage.removeItem("auth:token");
          localStorage.removeItem("auth:user");
          window.location.reload();
        }
      },
    },
  );

  return { data, error, mutate, isValidating };
};
