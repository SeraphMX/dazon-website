'use client'

import { Button, Card, CardBody, Input, Radio, RadioGroup } from '@nextui-org/react'
import { Store, Truck } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface ShippingFormData {
  method: 'delivery' | 'pickup'
  address?: string
  city?: string
  state?: string
  zipCode?: string
}

interface ShippingFormProps {
  onNext: (data: ShippingFormData) => void
  onBack: () => void
}

export function ShippingForm({ onNext, onBack }: ShippingFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ShippingFormData>({
    defaultValues: {
      method: 'delivery'
    }
  })

  const shippingMethod = watch('method')

  return (
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit(onNext)} className='space-y-6'>
          <h2 className='text-xl font-semibold mb-4'>Información de envío</h2>

          <RadioGroup {...register('method')} orientation='horizontal' defaultValue='delivery'>
            <Radio value='delivery'>
              <Truck className='text-primary' />
              Envío a domicilio
            </Radio>
            <Radio value='pickup'>
              <Store className='text-primary' />
              Recoger en tienda
            </Radio>
          </RadioGroup>

          {shippingMethod === 'delivery' ? (
            <div className='space-y-4'>
              <Input
                {...register('address', { required: true })}
                label='Dirección'
                variant='bordered'
                isInvalid={!!errors.address}
                errorMessage={errors.address && 'La dirección es requerida'}
              />

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Input
                  {...register('city', { required: true })}
                  label='Ciudad'
                  variant='bordered'
                  isInvalid={!!errors.city}
                  errorMessage={errors.city && 'La ciudad es requerida'}
                />
                <Input
                  {...register('state', { required: true })}
                  label='Estado'
                  variant='bordered'
                  isInvalid={!!errors.state}
                  errorMessage={errors.state && 'El estado es requerido'}
                />
                <Input
                  {...register('zipCode', { required: true })}
                  label='Código Postal'
                  variant='bordered'
                  isInvalid={!!errors.zipCode}
                  errorMessage={errors.zipCode && 'El código postal es requerido'}
                />
              </div>
            </div>
          ) : (
            <div className='bg-primary/5 rounded-lg p-4'>
              <h3 className='font-semibold mb-2'>Dirección de la tienda</h3>
              <p>Av. Principal #123</p>
              <p>Ciudad de México, México</p>
              <p>CP 12345</p>
              <p className='mt-2 text-sm text-gray-600'>Horario: Lunes a Viernes de 9:00 AM a 6:00 PM</p>
            </div>
          )}

          <div className='flex justify-between'>
            <Button variant='flat' onPress={onBack}>
              Volver
            </Button>
            <Button type='submit' color='primary'>
              Continuar
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
