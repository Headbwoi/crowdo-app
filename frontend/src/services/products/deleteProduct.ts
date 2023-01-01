import { productRequest } from "../makeRequest"

export function deleteProduct(id: string) {
  return productRequest(`/${id}`, { method: "DELETE" })
}
