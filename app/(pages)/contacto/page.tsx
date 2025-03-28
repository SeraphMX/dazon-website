'use client'

import { useState } from 'react'
import { Card, CardBody, Input, Textarea, Button } from "@nextui-org/react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useForm } from "react-hook-form"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Aquí iría la lógica para enviar el formulario
      console.log(data)
      reset()
      alert('Mensaje enviado correctamente')
    } catch (error) {
      alert('Error al enviar el mensaje')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-transparent">
            <CardBody className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@mitienda.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-400">+52 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Av. Principal #123<br />
                      Ciudad de México, México
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Horario de Atención</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                  Sábados: 10:00 AM - 2:00 PM
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="border border-transparent">
            <CardBody className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  label="Nombre"
                  variant="bordered"
                  isInvalid={!!errors.name}
                  errorMessage={errors.name && "El nombre es requerido"}
                />

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
                  {...register("subject", { required: true })}
                  type="text"
                  label="Asunto"
                  variant="bordered"
                  isInvalid={!!errors.subject}
                  errorMessage={errors.subject && "El asunto es requerido"}
                />

                <Textarea
                  {...register("message", { required: true })}
                  label="Mensaje"
                  variant="bordered"
                  isInvalid={!!errors.message}
                  errorMessage={errors.message && "El mensaje es requerido"}
                />

                <Button
                  type="submit"
                  color="primary"
                  className="w-full"
                  startContent={<Send size={20} />}
                  isLoading={isSubmitting}
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>

        <Card className="border border-transparent">
          <CardBody className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Ubicación</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.761237455862!2d-99.16869732421522!3d19.42702974146786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1709902149651!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}