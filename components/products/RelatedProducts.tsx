'use client'

import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react"
import { ShoppingCart, FileText } from "lucide-react"
import { Product } from "@/types/product"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "@/lib/store/features/cartSlice"
import { RootState } from "@/lib/store"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'

interface RelatedProductsProps {
  currentProduct: Product
  products: Product[]
}

export function RelatedProducts({ currentProduct, products }: RelatedProductsProps) {
  const dispatch = useDispatch()
  const { mode } = useSelector((state: RootState) => state.settings)

  const relatedProducts = products
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.categoryId === currentProduct.categoryId || 
       product.subcategoryId === currentProduct.subcategoryId)
    )
    .slice(0, 12)

  const handleAddToCart = (product: Product) => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.onSale ? (product.salePrice || product.price) : product.price,
      quantity: 1,
      image: product.images[0]
    }))
  }

  if (relatedProducts.length === 0) return null

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Card className="border border-transparent hover:border-primary/50 transition-colors">
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
                  onClick={() => mode === 'store' ? handleAddToCart(product) : null}
                >
                  {mode === 'store' ? 'Agregar al carrito' : 'Agregar a cotización'}
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}