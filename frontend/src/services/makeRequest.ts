import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const userAPI = axios.create({
  baseURL: import.meta.env.VITE_USER_API,
  withCredentials: true,
})
const productAPI = axios.create({
  baseURL: import.meta.env.VITE_PRODUCT_API,
  withCredentials: true,
})

// productAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`

export function userRequest(
  url: string,
  options?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<any, any>> {
  return userAPI(url, options)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err))
}

export function productRequest(
  url: string,
  options?: AxiosRequestConfig | undefined
): Promise<AxiosResponse> {
  return productAPI(url, options)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err))
}
