'use client'

import { brands } from '@/data/brands'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { RootState } from '@/lib/store'
import { addItem } from '@/lib/store/features/cartSlice'
import { Button, Card, CardBody, CardFooter, Checkbox, Input, Select, SelectItem, Slider } from '@nextui-org/react'
import { ChevronLeft, FileText, Search, ShoppingCart, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'

const sortOptions = [
  { value: 'newest', label: 'Más recientes' },
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
  { value: 'name-asc', label: 'Nombre: A-Z' },
  { value: 'name-desc', label: 'Nombre: Z-A' }
]

export default function SubcategoryPage() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { mode } = useSelector((state: RootState) => state.settings)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [sortBy, setSortBy] = useState('newest')
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const itemsPerPage = 12

  // Find the subcategory
  const subcategory = categories.flatMap((cat) => cat.subcategories).find((sub) => sub.slug === slug)
  const category = categories.find((cat) => cat.id === subcategory?.categoryId)

  // Filter products by subcategory
  const subcategoryProducts = products.filter((product) => product.subcategoryId === subcategory?.id)

  const handleAddToCart = (product: (typeof products)[0]) => {
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

  const filteredProducts = subcategoryProducts
    .filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesPrice = mode === 'store' ? product.price >= priceRange[0] && product.price <= priceRange[1] : true
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesBrand && matchesPrice && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

  const displayedProducts = filteredProducts.slice(0, page * itemsPerPage)
  const hasMore = displayedProducts.length < filteredProducts.length

  if (!subcategory) {
    return (
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-2xl font-bold mb-4'>Subcategoría no encontrada</h1>
        <Link href='/productos' className='text-primary'>
          Volver a productos
        </Link>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Link href='/productos' className='inline-flex items-center text-primary mb-8 hover:underline'>
        <ChevronLeft size={20} />
        Volver a productos
      </Link>

      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>{subcategory.name}</h1>
        {category && <p className='text-gray-600 dark:text-gray-400'>Categoría: {category.name}</p>}
      </div>

      <div className='flex flex-col md:flex-row gap-8'>
        {/* Sidebar con filtros */}
        <div className='w-full md:w-64 space-y-6'>
          <div className='sticky top-20'>
            <div className='bg-background border rounded-lg p-4 space-y-6'>
              <div>
                <h3 className='text-lg font-semibold mb-3'>Marcas</h3>
                <div className='space-y-2'>
                  {brands.map((brand) => (
                    <Checkbox
                      key={brand.id}
                      value={brand.name}
                      isSelected={selectedBrands.includes(brand.name)}
                      onValueChange={(isSelected) => {
                        setSelectedBrands((prev) => (isSelected ? [...prev, brand.name] : prev.filter((name) => name !== brand.name)))
                      }}
                    >
                      {brand.name}
                    </Checkbox>
                  ))}
                </div>
              </div>

              {mode === 'store' && (
                <div>
                  <h3 className='text-lg font-semibold mb-3'>Precio</h3>
                  <Slider
                    label='Rango de precio'
                    step={50}
                    minValue={0}
                    maxValue={2000}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value as number[])}
                    className='max-w-md'
                  />
                  <div className='flex justify-between mt-2'>
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className='flex-1'>
          {/* Barra de búsqueda y ordenamiento */}
          <div className='sticky top-20 z-10 bg-background/80 backdrop-blur-sm border rounded-lg p-4 mb-6'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Input
                placeholder='Buscar productos...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startContent={<Search size={18} />}
                className='flex-1'
              />
              <Select
                placeholder='Ordenar por'
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                startContent={<SlidersHorizontal size={18} />}
                className='w-full sm:w-48'
              >
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          {/* Lista de productos */}
          <InfiniteScroll
            dataLength={displayedProducts.length}
            next={() => setPage((prev) => prev + 1)}
            hasMore={hasMore}
            loader={<div className='text-center py-4'>Cargando más productos...</div>}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {displayedProducts.map((product) => (
              <Card key={product.id} className='border border-transparent hover:border-primary/50 transition-colors'>
                <CardBody className='p-0'>
                  <Link href={`/productos/${product.id}`}>
                    <img src={product.images[0]} alt={product.name} className='w-full object-cover h-48' />
                  </Link>
                </CardBody>
                <CardFooter className='flex flex-col items-start gap-2 p-4'>
                  <Link href={`/productos/${product.id}`} className='hover:text-primary'>
                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                  </Link>
                  {mode === 'store' && (
                    <div className='flex items-center gap-2'>
                      {product.onSale ? (
                        <>
                          <span className='text-xl font-bold text-primary'>${product.salePrice?.toFixed(2)}</span>
                          <span className='text-sm line-through text-gray-500'>${product.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className='text-xl font-bold text-primary'>${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  )}
                  <Button
                    color='primary'
                    variant='flat'
                    startContent={mode === 'store' ? <ShoppingCart size={20} /> : <FileText size={20} />}
                    className='w-full mt-2'
                    onClick={() => handleAddToCart(product)}
                  >
                    {mode === 'store' ? 'Agregar al carrito' : 'Agregar a cotización'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </InfiniteScroll>

          {displayedProducts.length === 0 && (
            <div className='text-center py-8'>
              <p className='text-gray-600 dark:text-gray-400'>No se encontraron productos que coincidan con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
