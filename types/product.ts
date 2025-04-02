export interface Category {
  id: number
  name: string
  image: string
  slug: string
  subcategories: Subcategory[]
}

interface Subcategory {
  id: number
  name: string
  slug: string
  categoryId: number
  image: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  sku: string
  stock: number
  categoryId: number
  subcategoryId: number
  images: string[]
  specifications?: Record<string, string>
  brand: string
  featured?: boolean
  onSale?: boolean
  salePrice?: number
}
