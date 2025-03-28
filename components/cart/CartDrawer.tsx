'use client'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { closeCart, removeItem, updateQuantity } from '@/lib/store/features/cartSlice'
import { Button, Input } from "@nextui-org/react"
import { X, Minus, Plus, ShoppingBag, Trash2, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function CartDrawer() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { items, total, isOpen, lastAddedItem } = useSelector((state: RootState) => state.cart)
  const { mode } = useSelector((state: RootState) => state.settings)

  useEffect(() => {
    if (lastAddedItem) {
      const timer = setTimeout(() => {
        dispatch(closeCart())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [lastAddedItem, dispatch])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeItem(id))
    } else {
      dispatch(updateQuantity({ id, quantity }))
    }
  }

  const handleAction = () => {
    dispatch(closeCart())
    if (mode === 'store') {
      router.push('/checkout')
    } else {
      router.push('/checkout/quote')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeCart())}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full sm:w-[400px] bg-background z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                {mode === 'store' ? (
                  <ShoppingBag size={24} />
                ) : (
                  <FileText size={24} />
                )}
                <span className="text-lg font-semibold">
                  {mode === 'store' ? 'Carrito de Compras' : 'Lista de Cotización'}
                </span>
              </div>
              <Button
                isIconOnly
                variant="light"
                onPress={() => dispatch(closeCart())}
              >
                <X size={20} />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  {mode === 'store' ? (
                    <ShoppingBag size={48} className="text-gray-400 mb-4" />
                  ) : (
                    <FileText size={48} className="text-gray-400 mb-4" />
                  )}
                  <p className="text-xl font-semibold mb-2">
                    {mode === 'store' ? 'Tu carrito está vacío' : 'Tu lista está vacía'}
                  </p>
                  <p className="text-gray-500">
                    {mode === 'store' 
                      ? 'Agrega algunos productos para comenzar'
                      : 'Agrega productos para solicitar una cotización'
                    }
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex gap-4 p-4 border rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          {mode === 'store' && (
                            <p className="text-primary font-bold">
                              ${item.price.toFixed(2)}
                            </p>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              isIconOnly
                              size="sm"
                              variant="flat"
                              onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                              className="w-20"
                              size="sm"
                              min={1}
                            />
                            <Button
                              isIconOnly
                              size="sm"
                              variant="flat"
                              onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </Button>
                            <Button
                              isIconOnly
                              size="sm"
                              color="danger"
                              variant="flat"
                              onPress={() => dispatch(removeItem(item.id))}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-4 space-y-4">
                {mode === 'store' && (
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-xl font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                )}
                <Button
                  color="primary"
                  className="w-full"
                  size="lg"
                  startContent={mode === 'store' ? <ShoppingBag /> : <FileText />}
                  onPress={handleAction}
                >
                  {mode === 'store' ? 'Proceder al pago' : 'Solicitar cotización'}
                </Button>
              </div>
            )}
          </motion.div>

          {/* Added to cart notification */}
          {lastAddedItem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-50"
            >
              <p className="font-semibold">
                {mode === 'store' ? '¡Producto agregado!' : '¡Producto añadido a la cotización!'}
              </p>
              <p className="text-sm">{lastAddedItem.name}</p>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  )
}