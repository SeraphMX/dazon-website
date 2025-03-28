'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { CartItem } from "@/lib/store/features/cartSlice"

interface CartSummaryProps {
  items: CartItem[]
  total: number
  mode?: 'store' | 'quote'
}

export function CartSummary({ items, total, mode = 'store' }: CartSummaryProps) {
  return (
    <Card>
      <CardHeader className="border-b">
        <h2 className="text-xl font-semibold">
          {mode === 'store' ? 'Resumen del pedido' : 'Resumen de cotización'}
        </h2>
      </CardHeader>
      <CardBody className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cantidad: {item.quantity}
              </p>
              {mode === 'store' && (
                <p className="text-primary font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              )}
            </div>
          </div>
        ))}

        {mode === 'store' && (
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  )
}