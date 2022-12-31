import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_DATABASE_URL,
  withCredentials: true,
})

export function makeRequest(
  url: string,
  options?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<any, any>> {
  return api(url, options)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err))
}
