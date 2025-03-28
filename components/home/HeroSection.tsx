'use client'

import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { HelpCircle, Package, Search } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const promotions = [
  {
    title: 'Ofertas de Primavera',
    description: 'Hasta 50% de descuento',
    image: '/images/banners/banner-1.jpg'
  },
  {
    title: 'Nuevas Colecciones',
    description: 'Descubre las últimas tendencias',
    image: '/images/banners/banner-2.jpg'
  }
]

export function HeroSection() {
  return (
    <section className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {/* Slider Principal */}
        <Card className='col-span-1 md:col-span-2 h-[400px] overflow-hidden'>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className='w-full h-full'
          >
            {promotions.map((promo, index) => (
              <SwiperSlide key={index}>
                <div className='relative w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${promo.image})` }}>
                  <div className='absolute inset-0 bg-black/20 flex flex-col justify-center p-8'>
                    <h2 className='text-white text-4xl font-bold mb-4'>{promo.title}</h2>
                    <p className='text-white text-xl mb-6'>{promo.description}</p>
                    <Button color='primary' variant='solid' className='max-w-xs'>
                      Ver Ofertas
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Card>

        {/* Bento Grid */}
        <div className='grid grid-rows-3 gap-4 h-[400px]'>
          <Card className='row-span-1'>
            <CardBody className='flex items-center justify-center'>
              <Input placeholder='Buscar productos...' startContent={<Search />} className='max-w-full' />
            </CardBody>
          </Card>

          <Card className='row-span-1'>
            <CardBody className='flex items-center justify-center'>Preguntas frecuentes</CardBody>
          </Card>

          <div className='row-span-1 grid grid-cols-2 gap-4'>
            <Card className='bg-secondary/10'>
              <CardBody className='flex flex-col items-center justify-center text-center'>
                <Package className='mb-2' size={24} />
                <span className='text-sm font-medium'>Rastrear Pedido</span>
              </CardBody>
            </Card>

            <Card className='bg-secondary/10'>
              <CardBody className='flex flex-col items-center justify-center text-center'>
                <HelpCircle className='mb-2' size={24} />
                <span className='text-sm font-medium'>Ayuda</span>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
