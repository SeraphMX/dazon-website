'use client'

import { useForm } from 'react-hook-form'
import { Card, CardBody, Input, Button, RadioGroup, Radio } from "@nextui-org/react"
import { CreditCard, Building2, Wallet, BanknoteIcon } from 'lucide-react'

interface PaymentFormData {
  method: 'card' | 'transfer' | 'deposit' | 'cash'
  cardNumber?: string
  cardName?: string
  expiry?: string
  cvv?: string
}

interface PaymentFormProps {
  onNext: (data: PaymentFormData) => void
  onBack: () => void
  shippingMethod: 'delivery' | 'pickup'
}

const bankAccounts = {
  transfer: {
    bank: 'BBVA',
    clabe: '012345678901234567',
    beneficiary: 'Mi Tienda S.A. de C.V.'
  },
  deposit: {
    bank: 'BBVA',
    cardNumber: '4152 3130 0015 1234',
    beneficiary: 'Mi Tienda S.A. de C.V.'
  }
}

export function PaymentForm({ onNext, onBack, shippingMethod }: PaymentFormProps) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PaymentFormData>({
    defaultValues: {
      method: 'card'
    }
  })

  const paymentMethod = watch('method')

  return (
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit(onNext)} className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Método de pago</h2>

          <RadioGroup
            {...register('method')}
            orientation="vertical"
            defaultValue="card"
          >
            <Radio
              value="card"
              startContent={<CreditCard className="text-primary" />}
            >
              Tarjeta de crédito/débito
            </Radio>
            <Radio
              value="transfer"
              startContent={<Building2 className="text-primary" />}
            >
              Transferencia bancaria
            </Radio>
            <Radio
              value="deposit"
              startContent={<Wallet className="text-primary" />}
            >
              Depósito bancario
            </Radio>
            {shippingMethod === 'pickup' && (
              <Radio
                value="cash"
                startContent={<BanknoteIcon className="text-primary" />}
              >
                Efectivo (solo para recoger en tienda)
              </Radio>
            )}
          </RadioGroup>

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <Input
                {...register("cardNumber", { required: true })}
                label="Número de tarjeta"
                variant="bordered"
                isInvalid={!!errors.cardNumber}
                errorMessage={errors.cardNumber && "El número de tarjeta es requerido"}
              />

              <Input
                {...register("cardName", { required: true })}
                label="Nombre en la tarjeta"
                variant="bordered"
                isInvalid={!!errors.cardName}
                errorMessage={errors.cardName && "El nombre es requerido"}
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  {...register("expiry", { required: true })}
                  label="Fecha de expiración"
                  placeholder="MM/YY"
                  variant="bordered"
                  isInvalid={!!errors.expiry}
                  errorMessage={errors.expiry && "La fecha es requerida"}
                />
                <Input
                  {...register("cvv", { required: true })}
                  label="CVV"
                  type="password"
                  maxLength={4}
                  variant="bordered"
                  isInvalid={!!errors.cvv}
                  errorMessage={errors.cvv && "El CVV es requerido"}
                />
              </div>
            </div>
          )}

          {paymentMethod === 'transfer' && (
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Información bancaria para transferencia</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2">
                  <span className="font-medium">Banco:</span>
                  <span>{bankAccounts.transfer.bank}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">CLABE:</span>
                  <span>{bankAccounts.transfer.clabe}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Beneficiario:</span>
                  <span>{bankAccounts.transfer.beneficiary}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Una vez realizada la transferencia, envía el comprobante a pagos@mitienda.com
              </p>
            </div>
          )}

          {paymentMethod === 'deposit' && (
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Información para depósito</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2">
                  <span className="font-medium">Banco:</span>
                  <span>{bankAccounts.deposit.bank}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Número de tarjeta:</span>
                  <span>{bankAccounts.deposit.cardNumber}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Beneficiario:</span>
                  <span>{bankAccounts.deposit.beneficiary}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Una vez realizado el depósito, envía el comprobante a pagos@mitienda.com
              </p>
            </div>
          )}

          {paymentMethod === 'cash' && (
            <div className="bg-primary/5 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                El pago en efectivo solo está disponible cuando recoges tu pedido en tienda.
                Podrás realizar el pago al momento de recoger tus productos.
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button
              variant="flat"
              onPress={onBack}
            >
              Volver
            </Button>
            <Button
              type="submit"
              color="primary"
            >
              Revisar pedido
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}