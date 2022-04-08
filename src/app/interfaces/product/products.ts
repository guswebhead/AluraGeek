export interface Products extends Array<Product>{}

export interface Product {
  id: number,
  type: string,
  title: string,
  price: number,
  img: string,
  description: string,
}

export interface ProductsAPI{
  payload: Products;
}
