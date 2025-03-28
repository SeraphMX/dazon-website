import { Link } from '@nextui-org/react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className='w-full bg-blue-950 border-t py-12 text-slate-100'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-lg mb-4'>Dazon México</h3>
            <p className='text-sm dark:text-gray-400'>
              Tu tienda online de confianza para encontrar los mejores productos al mejor precio.
            </p>
            <div className='flex space-x-4 pt-5'>
              <Link href='#'>
                <Facebook size={24} className='text-white' />
              </Link>
              <Link href='#' className='text-white'>
                <Instagram size={24} />
              </Link>
              <Link href='#' className='text-white'>
                <Twitter size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Enlaces Rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white'>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white'>
                  Contacto
                </Link>
              </li>

              <li>
                <Link href='#' className='text-white'>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Ayuda</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white'>
                  Envíos
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white'>
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white'>
                  Estado del Pedido
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Ayuda</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white'>
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white'>
                  Terminos y Condiciones
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white'>
                  Distribuidores
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t text-center text-sm text-slate-100 dark:text-gray-400'>
          <p>© {new Date().getFullYear()} Dazon México. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
