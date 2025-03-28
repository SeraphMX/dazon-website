import { Category } from '@/types/product'

export const categories: Category[] = [
  {
    id: 1,
    name: 'Refacciones',
    image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?auto=format&fit=crop&q=80&w=2340',
    slug: 'refacciones',
    subcategories: [
      {
        id: 101,
        name: 'Freno',
        slug: 'freno',
        categoryId: 1,
        image: '/images/categories/freno.jpg'
      },
      {
        id: 102,
        name: 'Motor',
        slug: 'motor',
        categoryId: 1,
        image: 'images/categories/motor.jpg'
      },
      {
        id: 103,
        name: 'Chasis',
        slug: 'chasis',
        categoryId: 1,
        image: 'images/categories/chasis.jpg'
      },
      {
        id: 104,
        name: 'Plásticos',
        slug: 'plasticos',
        categoryId: 1,
        image: 'images/categories/plasticos.jpg'
      },
      {
        id: 105,
        name: 'Tracción',
        slug: 'traccion',
        categoryId: 1,
        image: 'images/categories/traccion.jpg'
      },
      {
        id: 106,
        name: 'Rueda',
        slug: 'rueda',
        categoryId: 1,
        image: 'images/categories/rueda.jpg'
      },
      {
        id: 107,
        name: 'Suspensión',
        slug: 'suspension',
        categoryId: 1,
        image: 'images/categories/suspension.jpg'
      },
      {
        id: 108,
        name: 'Eléctrico',
        slug: 'electrico',
        categoryId: 1,
        image: 'images/categories/electrico.jpg'
      }
    ]
  },
  {
    id: 2,
    name: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=2340',
    slug: 'accesorios',
    subcategories: [
      {
        id: 201,
        name: 'Maleteros',
        slug: 'maleteros',
        categoryId: 2,
        image: '/images/categories/maleteros.jpg'
      },
      {
        id: 202,
        name: 'Portaplacas',
        slug: 'portaplacas',
        categoryId: 2,
        image: '/images/categories/portaplacas.jpg'
      },
      {
        id: 203,
        name: 'Portacelulares',
        slug: 'portacelulares',
        categoryId: 2,
        image: '/images/categories/portacelulares.jpg'
      },
      {
        id: 204,
        name: 'Redes',
        slug: 'redes',
        categoryId: 2,
        image: '/images/categories/redes.jpg'
      },
      {
        id: 205,
        name: 'Candados',
        slug: 'candados',
        categoryId: 2,
        image: '/images/categories/candados.jpg'
      },
      {
        id: 206,
        name: "Sticker's",
        slug: 'stickers',
        categoryId: 2,
        image: '/images/categories/stickers.jpg'
      },
      {
        id: 207,
        name: 'Cubiertas de asiento',
        slug: 'cubiertas-de-asiento',
        categoryId: 2,
        image: '/images/categories/cubiertas-asiento.jpg'
      }
    ]
  },
  {
    id: 3,
    name: 'Piloto',
    image: 'https://images.unsplash.com/photo-1621247077532-45e64c802bf0?auto=format&fit=crop&q=80&w=2340',
    slug: 'piloto',
    subcategories: [
      {
        id: 301,
        name: 'Cascos',
        slug: 'cascos',
        categoryId: 3,
        image: '/images/categories/cascos.jpg'
      },
      {
        id: 302,
        name: 'Chamarras',
        slug: 'chamarras',
        categoryId: 3,
        image: '/images/categories/chamarras.jpg'
      },
      {
        id: 303,
        name: 'Esqueletos',
        slug: 'esqueletos',
        categoryId: 3,
        image: '/images/categories/esqueletos.jpg'
      },
      {
        id: 304,
        name: 'Guantes',
        slug: 'guantes',
        categoryId: 3,
        image: '/images/categories/guantes.jpg'
      },
      {
        id: 305,
        name: 'Rodilleras',
        slug: 'rodilleras',
        categoryId: 3,
        image: '/images/categories/rodilleras.jpg'
      },
      {
        id: 306,
        name: 'Impermeables',
        slug: 'impermeables',
        categoryId: 3,
        image: '/images/categories/impermeables.jpg'
      },
      {
        id: 307,
        name: 'Micas',
        slug: 'micas',
        categoryId: 3,
        image: '/images/categories/micas.jpg'
      },
      {
        id: 308,
        name: 'Accesorios de casco',
        slug: 'accesorios-de-casco',
        categoryId: 3,
        image: '/images/categories/accesorios-casco.jpg'
      }
    ]
  },
  {
    id: 4,
    name: 'E-BIKES',
    image: 'https://images.unsplash.com/photo-1621247077208-5f3e0e8e8b05?auto=format&fit=crop&q=80&w=2340',
    slug: 'e-bikes',
    subcategories: [
      {
        id: 401,
        name: 'Light Urban',
        slug: 'light-urban',
        categoryId: 4,
        image: 'https://images.unsplash.com/photo-1621247077261-5f3e0e8e8b06?auto=format&fit=crop&q=80&w=2340'
      },
      {
        id: 402,
        name: 'Daily Urban',
        slug: 'daily-urban',
        categoryId: 4,
        image: 'https://images.unsplash.com/photo-1621247077314-5f3e0e8e8b07?auto=format&fit=crop&q=80&w=2340'
      },
      {
        id: 403,
        name: 'Strong Urban',
        slug: 'strong-urban',
        categoryId: 4,
        image: 'https://images.unsplash.com/photo-1621247077367-5f3e0e8e8b08?auto=format&fit=crop&q=80&w=2340'
      }
    ]
  }
]
