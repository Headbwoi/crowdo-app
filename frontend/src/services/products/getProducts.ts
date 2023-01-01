import { productRequest } from "../makeRequest"

export function getProducts() {
  return productRequest("/", { method: "GET" })
}
