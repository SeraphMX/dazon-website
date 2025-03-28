import { Product } from '@/types/product'

// Cascos y Equipo de Protección (Categoría 3)
const protectionEquipment: Product[] = [
  {
    id: "1",
    name: "Casco Shoei GT-Air II",
    description: "Casco integral de alta gama con ventilación superior y visera solar interna. Sistema de comunicación integrado y excelente aerodinámica.",
    price: 599.99,
    sku: "CSK-0001",
    stock: 15,
    categoryId: 3,
    subcategoryId: 301,
    images: [
      "https://images.unsplash.com/photo-1621247076756-c78568e7e2e3",
      "https://images.unsplash.com/photo-1621247076837-f3c81c46a2e9"
    ],
    specifications: {
      material: "Fibra de vidrio multifibra",
      talla: "M",
      color: "Negro mate",
      certificacion: "DOT, ECE 22.05"
    },
    brand: "Shoei",
    featured: true,
    onSale: true,
    salePrice: 499.99
  },
  {
    id: "2",
    name: "Casco AGV Pista GP RR",
    description: "Casco de competición desarrollado en MotoGP. Máxima protección y aerodinámica.",
    price: 899.99,
    sku: "CSK-0002",
    stock: 10,
    categoryId: 3,
    subcategoryId: 301,
    images: [
      "https://images.unsplash.com/photo-1600705722908-bab2ad1a6919",
      "https://images.unsplash.com/photo-1600705722908-bab2ad1a6919"
    ],
    specifications: {
      material: "Carbono 100%",
      talla: "L",
      color: "Rojo/Negro",
      certificacion: "ECE 22.06"
    },
    brand: "AGV",
    featured: true
  },
  {
    id: "3",
    name: "Chaqueta Alpinestars T-GP Plus R v3",
    description: "Chaqueta de moto con protecciones y tejido resistente a la abrasión. Perfecta para uso urbano y turismo.",
    price: 299.99,
    sku: "CHA-0001",
    stock: 20,
    categoryId: 3,
    subcategoryId: 302,
    images: [
      "https://images.unsplash.com/photo-1591466250462-2a0e7f0d4f9f",
      "https://images.unsplash.com/photo-1591466250462-2a0e7f0d4f9f"
    ],
    specifications: {
      material: "Textil resistente a la abrasión",
      talla: "L",
      color: "Negro/Rojo",
      proteccion: "CE nivel 2"
    },
    brand: "Alpinestars",
    featured: true
  },
  {
    id: "4",
    name: "Chaqueta Dainese Racing 4",
    description: "Chaqueta de piel premium para uso en pista y carretera. Máxima protección y confort.",
    price: 599.99,
    sku: "CHA-0002",
    stock: 15,
    categoryId: 3,
    subcategoryId: 302,
    images: [
      "https://images.unsplash.com/photo-1591466250462-2a0e7f0d4f9f",
      "https://images.unsplash.com/photo-1591466250462-2a0e7f0d4f9f"
    ],
    specifications: {
      material: "Piel de vaca premium",
      talla: "M",
      color: "Negro/Blanco",
      proteccion: "CE nivel 2"
    },
    brand: "Dainese",
    onSale: true,
    salePrice: 499.99
  },
  {
    id: "5",
    name: "Guantes Dainese Carbon 3",
    description: "Guantes deportivos con protecciones de carbono. Excelente sensibilidad y protección.",
    price: 129.99,
    sku: "GLV-0001",
    stock: 25,
    categoryId: 3,
    subcategoryId: 304,
    images: [
      "https://images.unsplash.com/photo-1621247076943-5f3e0e8e8b00",
      "https://images.unsplash.com/photo-1621247076943-5f3e0e8e8b00"
    ],
    specifications: {
      material: "Piel y carbono",
      talla: "M",
      color: "Negro",
      proteccion: "CE nivel 1"
    },
    brand: "Dainese",
    featured: true,
    onSale: true,
    salePrice: 99.99
  }
]

// Frenos y Suspensión (Categoría 1, Subcategorías 101 y 107)
const brakesAndSuspension: Product[] = [
  {
    id: "6",
    name: "Kit de Frenos Brembo GP4-RX",
    description: "Kit de frenos de alto rendimiento para motos deportivas. Incluye pinzas radiales y bomba de freno.",
    price: 899.99,
    sku: "BRK-0001",
    stock: 8,
    categoryId: 1,
    subcategoryId: 101,
    images: [
      "https://images.unsplash.com/photo-1621248861137-53c574b5fe81",
      "https://images.unsplash.com/photo-1621248954451-72b14cc701f7"
    ],
    specifications: {
      material: "Aluminio forjado",
      tipo: "Radial",
      color: "Oro",
      compatibilidad: "Universal"
    },
    brand: "Brembo",
    featured: true,
    onSale: true,
    salePrice: 799.99
  },
  {
    id: "7",
    name: "Suspensión Öhlins TTX GP",
    description: "Amortiguador trasero de competición con tecnología TTX. Máximo rendimiento en pista.",
    price: 1499.99,
    sku: "SUS-0001",
    stock: 3,
    categoryId: 1,
    subcategoryId: 107,
    images: [
      "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d",
      "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d"
    ],
    specifications: {
      material: "Aluminio 7075",
      tipo: "Gas/Aceite",
      ajustes: "Compresión y rebote",
      recorrido: "120mm"
    },
    brand: "Öhlins",
    featured: true
  }
]

// Motor y Escape (Categoría 1, Subcategoría 102)
const engineAndExhaust: Product[] = [
  {
    id: "8",
    name: "Escape Akrapovič Evolution Line",
    description: "Sistema de escape completo de titanio para máximo rendimiento y sonido racing.",
    price: 1299.99,
    sku: "EXH-0001",
    stock: 5,
    categoryId: 1,
    subcategoryId: 102,
    images: [
      "https://images.unsplash.com/photo-1589278225322-af3d63a09ac7",
      "https://images.unsplash.com/photo-1589278225322-af3d63a09ac7"
    ],
    specifications: {
      material: "Titanio",
      tipo: "Full system",
      homologacion: "Euro 5",
      peso: "3.5 kg"
    },
    brand: "Akrapovič",
    featured: true
  }
]

// Combinar todas las categorías
export const products: Product[] = [
  ...protectionEquipment,
  ...brakesAndSuspension,
  ...engineAndExhaust
]