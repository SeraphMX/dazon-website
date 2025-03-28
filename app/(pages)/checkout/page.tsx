'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { Steps } from '@/components/checkout/Steps'
import { CartSummary } from '@/components/checkout/CartSummary'
import { ContactForm } from '@/components/checkout/ContactForm'
import { ShippingForm } from '@/components/checkout/ShippingForm'
import { PaymentForm } from '@/components/checkout/PaymentForm'
import { OrderConfirmation } from '@/components/checkout/OrderConfirmation'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total } = useSelector((state: RootState) => state.cart)
  const { mode } = useSelector((state: RootState) => state.settings)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    contact: {},
    shipping: {
      method: 'delivery'
    },
    payment: {}
  })

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {mode === 'store' ? 'Tu carrito está vacío' : 'Tu lista de cotización está vacía'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {mode === 'store'
            ? 'Agrega algunos productos antes de proceder al pago'
            : 'Agrega algunos productos antes de solicitar una cotización'
          }
        </p>
        <Button
          color="primary"
          onClick={() => router.push('/productos')}
        >
          Ver productos
        </Button>
      </div>
    )
  }

  const handleNext = (data: any) => {
    if (currentStep === 1) {
      setFormData(prev => ({ ...prev, contact: data }))
    } else if (currentStep === 2) {
      setFormData(prev => ({ ...prev, shipping: data }))
    } else if (currentStep === 3 && mode === 'store') {
      setFormData(prev => ({ ...prev, payment: data }))
    }
    setCurrentStep(prev => prev + 1)
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Steps currentStep={currentStep} mode={mode} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-8">
          {currentStep === 1 && (
            <ContactForm onNext={handleNext} />
          )}
          {currentStep === 2 && (
            <ShippingForm 
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {mode === 'store' && currentStep === 3 && (
            <PaymentForm 
              onNext={handleNext}
              onBack={handleBack}
              shippingMethod={formData.shipping.method}
            />
          )}
          {currentStep === (mode === 'store' ? 4 : 3) && (
            <OrderConfirmation
              formData={formData}
              onBack={handleBack}
              mode={mode}
            />
          )}
        </div>

        <div className="lg:col-span-1">
          <CartSummary items={items} total={total} mode={mode} />
        </div>
      </div>
    </div>
  )
}