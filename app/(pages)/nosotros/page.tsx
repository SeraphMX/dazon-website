import { Card, CardBody } from "@nextui-org/react"
import { Award, Truck, Users, Clock } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Calidad Garantizada",
      description: "Trabajamos solo con las mejores marcas y productos certificados."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Envíos a Todo el País",
      description: "Entrega rápida y segura a cualquier parte del territorio nacional."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Atención Personalizada",
      description: "Equipo de expertos disponible para asesorarte en tu compra."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Soporte 24/7",
      description: "Estamos disponibles para ayudarte en cualquier momento."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
            Somos una empresa líder en la venta de refacciones y accesorios para motocicletas,
            comprometidos con ofrecer los mejores productos y el mejor servicio a nuestros clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Desde nuestros inicios en 2010, nos hemos dedicado a proporcionar
                productos de la más alta calidad para entusiastas de las motocicletas.
                A lo largo de los años, hemos crecido hasta convertirnos en uno de los
                principales proveedores del mercado.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Nuestra misión es proporcionar a nuestros clientes los mejores productos
                y servicios, garantizando su satisfacción y seguridad en cada compra.
                Nos esforzamos por mantener los más altos estándares de calidad y servicio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border border-transparent hover:border-primary/50 transition-colors">
                <CardBody className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Excelencia</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Buscamos la perfección en cada detalle de nuestro servicio.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Integridad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Actuamos con honestidad y transparencia en todo momento.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nos adaptamos constantemente a las nuevas tecnologías y tendencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}