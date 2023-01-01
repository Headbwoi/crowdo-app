import { productRequest } from "../makeRequest"
import { IProduct } from "./productType"

export function createProduct(productData: IProduct) {
  return productRequest("/", { method: "POST", data: productData })
}
