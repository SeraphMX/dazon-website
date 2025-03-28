import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { CategoryTabs } from '@/components/categories/CategoryTabs'
import { BrandsSlider } from '@/components/home/BrandsSlider'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
        <Suspense fallback={<div>Loading products...</div>}>
          <FeaturedProducts />
        </Suspense>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Nuestras Categorías</h2>
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoryTabs />
        </Suspense>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Nuestras Marcas</h2>
        <Suspense fallback={<div>Loading brands...</div>}>
          <BrandsSlider />
        </Suspense>
      </section>
    </>
  )
}