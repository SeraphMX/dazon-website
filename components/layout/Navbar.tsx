'use client'

import { RootState } from '@/lib/store'
import { openCart } from '@/lib/store/features/cartSlice'
import { setMode, setTheme } from '@/lib/store/features/settingsSlice'
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar
} from '@nextui-org/react'
import { FileText, Heart, Moon, Settings, ShoppingCart, Store, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function Navbar() {
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const { mode } = useSelector((state: RootState) => state.settings)
  const pathname = usePathname()
  const { theme, setTheme: setNextTheme } = useTheme()

  useEffect(() => {
    if (theme === 'light' || theme === 'dark') {
      dispatch(setTheme(theme))
    }
  }, [theme, dispatch])

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ]

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setNextTheme(newTheme)
  }

  const handleModeChange = (newMode: 'store' | 'catalog') => {
    dispatch(setMode(newMode))
  }

  return (
    <NextUINavbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth='2xl'>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} />
      </NavbarContent>

      <NavbarContent className='pr-3 sm:hidden' justify='center'>
        <NavbarBrand>
          <Image src='/images/logo-header.jpg' alt='' width={50} height={60} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='start'>
        <NavbarBrand>
          <Link href='/'>
            <Image removeWrapper src='/images/logo-header.jpg' alt='' className='w-8 rounded-none ' />
          </Link>

          <span className='text-xl font-semibold pl-2'>Dazon México</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end' className='gap-2'>
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={pathname === item.href}>
            <Link color={pathname === item.href ? 'primary' : 'foreground'} href={item.href} className='hover:text-primary'>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem className='pl-5'>
          <Button as={Link} href='/favoritos' variant='light' isIconOnly>
            <Heart size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Badge content={cartItems.length} color='primary' shape='circle' showOutline={false} isInvisible={cartItems.length === 0}>
            <Button variant='light' isIconOnly onPress={() => dispatch(openCart())}>
              {mode === 'store' ? <ShoppingCart size={20} /> : <FileText size={20} />}
            </Button>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Button variant='light' isIconOnly>
                <User size={20} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Perfil'>
              {isAuthenticated ? (
                <>
                  <DropdownItem key='perfil'>Mi Perfil</DropdownItem>
                  <DropdownItem key='pedidos'>Mis Pedidos</DropdownItem>
                  <DropdownItem key='logout' className='text-danger' color='danger'>
                    Cerrar Sesión
                  </DropdownItem>
                </>
              ) : (
                <>
                  <DropdownItem key='login'>Iniciar Sesión</DropdownItem>
                  <DropdownItem key='signup'>Registrarse</DropdownItem>
                </>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Button variant='light' isIconOnly>
                <Settings size={20} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Configuración'>
              <DropdownItem
                key='theme'
                startContent={theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                onPress={handleThemeChange}
              >
                {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
              </DropdownItem>
              <DropdownItem
                key='mode'
                startContent={mode === 'store' ? <FileText size={20} /> : <Store size={20} />}
                onPress={() => handleModeChange(mode === 'store' ? 'catalog' : 'store')}
              >
                {mode === 'store' ? 'Modo Catálogo' : 'Modo Tienda'}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link href={item.href} size='lg' color={pathname === item.href ? 'primary' : 'foreground'}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  )
}
