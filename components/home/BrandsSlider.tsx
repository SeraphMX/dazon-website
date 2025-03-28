'use client'

import { brands } from '@/data/brands'
import { Card, CardBody, Image } from '@nextui-org/react'
import Link from 'next/link'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function BrandsSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={2}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }}
      className='w-full'
    >
      {brands.map((brand) => (
        <SwiperSlide key={brand.id}>
          <Link href={`/marcas/${brand.name.toLowerCase()}`}>
            <Card className='border border-transparent hover:border-primary/50 transition-colors shadow-none'>
              <CardBody className='p-0'>
                <div className='aspect-[3/2] relative'>
                  <Image removeWrapper alt={brand.name} className='object-contain w-full h-full' src={brand.logo} />
                </div>
              </CardBody>
            </Card>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
