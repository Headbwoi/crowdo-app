import { productRequest } from "../makeRequest"
import { IProduct } from "./productType"

export function editProduct(id: string, productData: IProduct) {
  return productRequest(`/${id}`, { method: "PUT", data: productData })
}
