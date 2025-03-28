'use client'

import { useForm } from 'react-hook-form'
import { Card, CardBody, Input, Button } from "@nextui-org/react"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface ContactFormProps {
  onNext: (data: ContactFormData) => void
}

export function ContactForm({ onNext }: ContactFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()

  return (
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit(onNext)} className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              {...register("firstName", { required: true })}
              label="Nombre"
              variant="bordered"
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName && "El nombre es requerido"}
            />
            <Input
              {...register("lastName", { required: true })}
              label="Apellidos"
              variant="bordered"
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName && "Los apellidos son requeridos"}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              {...register("email", { 
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={!!errors.email}
              errorMessage={errors.email && "Email inválido"}
            />
            <Input
              {...register("phone", { required: true })}
              type="tel"
              label="Teléfono"
              variant="bordered"
              isInvalid={!!errors.phone}
              errorMessage={errors.phone && "El teléfono es requerido"}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              color="primary"
              size="lg"
            >
              Continuar
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}