'use client'

import { useDispatch } from 'react-redux'
import { Card, CardBody, Button } from "@nextui-org/react"
import { clearCart } from '@/lib/store/features/cartSlice'
import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'

interface OrderConfirmationProps {
  formData: {
    contact: any
    shipping: any
    payment?: any
  }
  onBack: () => void
  mode?: 'store' | 'catalog'
}

export function OrderConfirmation({ formData, onBack, mode = 'store' }: OrderConfirmationProps) {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleConfirm = () => {
    dispatch(clearCart())
    if (mode === 'store') {
      router.push('/checkout/success')
    } else {
      router.push('/checkout/quote/success')
    }
  }

  return (
    <Card>
      <CardBody className="space-y-6">
        <div className="text-center">
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">
            {mode === 'store' ? 'Confirmar pedido' : 'Confirmar solicitud'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {mode === 'store' 
              ? 'Por favor revisa los detalles de tu pedido antes de confirmar'
              : 'Por favor revisa los detalles de tu solicitud antes de enviar'
            }
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Información de contacto</h3>
            <p>{formData.contact.firstName} {formData.contact.lastName}</p>
            <p>{formData.contact.email}</p>
            <p>{formData.contact.phone}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Información de envío</h3>
            {formData.shipping.method === 'delivery' ? (
              <>
                <p>{formData.shipping.address}</p>
                <p>{formData.shipping.city}, {formData.shipping.state} {formData.shipping.zipCode}</p>
              </>
            ) : (
              <p>Recoger en tienda</p>
            )}
          </div>

          {mode === 'store' && formData.payment && (
            <div>
              <h3 className="font-semibold mb-2">Método de pago</h3>
              {formData.payment.method === 'card' ? (
                <p>Tarjeta terminada en {formData.payment.cardNumber?.slice(-4)}</p>
              ) : formData.payment.method === 'transfer' ? (
                <p>Transferencia bancaria</p>
              ) : formData.payment.method === 'deposit' ? (
                <p>Depósito bancario</p>
              ) : (
                <p>Pago en efectivo</p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="flat"
            onPress={onBack}
          >
            Volver
          </Button>
          <Button
            color="primary"
            onPress={handleConfirm}
          >
            {mode === 'store' ? 'Confirmar pedido' : 'Solicitar cotización'}
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}