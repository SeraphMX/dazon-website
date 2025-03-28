'use client'

import { useParams } from 'next/navigation'
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react"
import { ShoppingCart, FileText, ChevronLeft } from "lucide-react"
import { brands } from '@/data/brands'
import { products } from '@/data/products'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/lib/store/features/cartSlice'
import { RootState } from '@/lib/store'
import Link from 'next/link'

export default function BrandPage() {
  const { name } = useParams()
  const dispatch = useDispatch()
  const { mode } = useSelector((state: RootState) => state.settings)
  
  const brand = brands.find(b => b.name.toLowerCase() === name)
  const brandProducts = products.filter(p => p.brand?.toLowerCase() === name)

  if (!brand) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Marca no encontrada</h1>
        <Link href="/productos" className="text-primary">
          Volver a productos
        </Link>
      </div>
    )
  }

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.onSale ? (product.salePrice || product.price) : product.price,
      quantity: 1,
      image: product.images[0]
    }))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link 
        href="/productos"
        className="inline-flex items-center text-primary mb-8 hover:underline"
      >
        <ChevronLeft size={20} />
        Volver a productos
      </Link>

      <div className="mb-12">
        <div className="relative aspect-[3/1] mb-8">
          <Image
            removeWrapper
            alt={brand.name}
            className="object-cover w-full h-full rounded-lg"
            src={brand.logo}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h1 className="text-4xl font-bold text-white">{brand.name}</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {brand.description}
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-8">Productos de {brand.name}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brandProducts.map((product) => (
          <Card key={product.id} className="border border-transparent hover:border-primary/50 transition-colors">
            <CardBody className="p-0">
              <Link href={`/productos/${product.id}`}>
                <Image
                  removeWrapper
                  alt={product.name}
                  className="w-full object-cover h-48"
                  src={product.images[0]}
                />
              </Link>
            </CardBody>
            <CardFooter className="flex flex-col items-start gap-2 p-4">
              <Link href={`/productos/${product.id}`} className="hover:text-primary">
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </Link>
              {mode === 'store' && (
                <div className="flex items-center gap-2">
                  {product.onSale ? (
                    <>
                      <span className="text-xl font-bold text-primary">
                        ${product.salePrice?.toFixed(2)}
                      </span>
                      <span className="text-sm line-through text-gray-500">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
              )}
              <Button
                color="primary"
                variant="flat"
                startContent={mode === 'store' ? <ShoppingCart size={20} /> : <FileText size={20} />}
                className="w-full mt-2"
                onClick={() => handleAddToCart(product)}
              >
                {mode === 'store' ? 'Agregar al carrito' : 'Agregar a cotización'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}