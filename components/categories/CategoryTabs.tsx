'use client'

import { categories } from '@/data/categories'
import { Card, CardBody, Image, Tab, Tabs } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function CategoryTabs() {
  const [selected, setSelected] = useState('1')

  return (
    <div className='flex flex-col gap-8'>
      <Tabs
        aria-label='Categorías'
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key.toString())}
        color='primary'
        variant='underlined'
        classNames={{
          tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
          cursor: 'w-full bg-primary',
          tab: 'max-w-fit px-0 h-12',
          tabContent: 'group-data-[selected=true]:text-primary'
        }}
      >
        {categories.map((category) => (
          <Tab key={category.id.toString()} title={category.name} />
        ))}
      </Tabs>

      {categories.map((category) => (
        <div key={category.id} className={selected === category.id.toString() ? 'block' : 'hidden'}>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {category.subcategories.map((subcategory) => (
              <motion.div
                key={subcategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card isPressable className='border border-transparent hover:border-primary/50 transition-colors'>
                  <CardBody className='p-0'>
                    <div className='relative aspect-square'>
                      <Image removeWrapper alt={subcategory.name} className='object-cover w-full h-full' src={subcategory.image} />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 z-10'>
                        <h3 className='text-white font-semibold text-2xl'>{subcategory.name}</h3>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
