'use client'

import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react"
import { ShoppingCart, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { featuredProducts } from "@/data/featuredProducts"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "@/lib/store/features/cartSlice"
import { RootState } from "@/lib/store"
import Link from "next/link"

export function FeaturedProducts() {
  const dispatch = useDispatch()
  const { mode } = useSelector((state: RootState) => state.settings)

  // Get 4 random featured products
  const randomFeaturedProducts = [...featuredProducts]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.onSale ? (product.salePrice || product.price) : product.price,
      quantity: 1,
      image: product.images[0]
    }))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {randomFeaturedProducts.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
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
                onClick={() => handleAddToCart(product)}
              >
                {mode === 'store' ? 'Agregar al carrito' : 'Agregar a cotización'}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}