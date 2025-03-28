'use client'

import { Button } from "@nextui-org/react"
import { CheckCircle2, ShoppingBag } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function CheckoutSuccessPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Tu pedido ha sido procesado correctamente. Recibirás un email con los detalles de tu compra.
        </p>
        <Button
          color="primary"
          size="lg"
          startContent={<ShoppingBag />}
          onPress={() => router.push('/productos')}
        >
          Seguir comprando
        </Button>
      </div>
    </div>
  )
}