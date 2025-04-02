'use client'

import { RelatedProducts } from '@/components/products/RelatedProducts'
import { products } from '@/data/products'
import { RootState } from '@/lib/store'
import { addItem } from '@/lib/store/features/cartSlice'
import { Button, Card, CardBody, Image } from '@nextui-org/react'
import { ChevronLeft, ChevronRight, FileText, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { mode } = useSelector((state: RootState) => state.settings)
  const [activeImage, setActiveImage] = useState(0)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-2xl font-bold mb-4'>Producto no encontrado</h1>
        <Link href='/productos' className='text-primary'>
          Volver a productos
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.onSale ? product.salePrice || product.price : product.price,
        quantity: 1,
        image: product.images[0]
      })
    )
  }

  return (
    <div className='container mx-auto px-4 py-16'>
      <Link href='/productos' className='inline-flex items-center text-primary mb-8 hover:underline'>
        <ChevronLeft size={20} />
        Volver a productos
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Galería de imágenes */}
        <div className='space-y-4'>
          <Card className='w-full'>
            <CardBody className='p-0'>
              <div className='relative aspect-square'>
                <Image removeWrapper alt={product.name} className='object-cover w-full h-full' src={product.images[activeImage]} />
                {product.images.length > 1 && (
                  <>
                    <Button
                      isIconOnly
                      variant='flat'
                      className='absolute left-2 top-1/2 -translate-y-1/2'
                      onClick={() => setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      isIconOnly
                      variant='flat'
                      className='absolute right-2 top-1/2 -translate-y-1/2'
                      onClick={() => setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    >
                      <ChevronRight />
                    </Button>
                  </>
                )}
              </div>
            </CardBody>
          </Card>

          {product.images.length > 1 && (
            <div className='grid grid-cols-4 gap-2'>
              {product.images.map((image, index) => (
                <Button
                  key={index}
                  isIconOnly
                  variant={activeImage === index ? 'flat' : 'light'}
                  className='p-0 min-w-0 w-full aspect-square'
                  onClick={() => setActiveImage(index)}
                >
                  <Image removeWrapper alt={`${product.name} ${index + 1}`} className='object-cover w-full h-full' src={image} />
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
            <p className='text-gray-600 dark:text-gray-400'>{product.description}</p>
          </div>

          {mode === 'store' && (
            <div className='flex items-center gap-4'>
              {product.onSale ? (
                <>
                  <span className='text-3xl font-bold text-primary'>${product.salePrice?.toFixed(2)}</span>
                  <span className='text-xl line-through text-gray-500'>${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className='text-3xl font-bold text-primary'>${product.price.toFixed(2)}</span>
              )}
            </div>
          )}

          <div className='flex gap-2'>
            <Button
              color='primary'
              variant='solid'
              size='lg'
              startContent={mode === 'store' ? <ShoppingCart /> : <FileText />}
              className='flex-1'
              onClick={mode === 'store' ? handleAddToCart : undefined}
            >
              {mode === 'store' ? 'Agregar al carrito' : 'Agregar a cotización'}
            </Button>
            <Button variant='flat' size='lg' isIconOnly>
              <Heart />
            </Button>
          </div>

          <Card>
            <CardBody className='space-y-4'>
              <h2 className='text-xl font-semibold'>Especificaciones</h2>
              <dl className='space-y-2'>
                {Object.entries(product.specifications ?? {}).map(([key, value]) => (
                  <div key={key} className='grid grid-cols-2'>
                    <dt className='font-medium text-gray-600 dark:text-gray-400 capitalize'>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
                <div className='grid grid-cols-2'>
                  <dt className='font-medium text-gray-600 dark:text-gray-400'>SKU</dt>
                  <dd>{product.sku}</dd>
                </div>
                {product.brand && (
                  <div className='grid grid-cols-2'>
                    <dt className='font-medium text-gray-600 dark:text-gray-400'>Marca</dt>
                    <dd>
                      <Link href={`/marcas/${product.brand.toLowerCase()}`} className='text-primary hover:underline'>
                        {product.brand}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Productos relacionados */}
      <RelatedProducts currentProduct={product} products={products} />
    </div>
  )
}
