import { Product } from '@/types/product'

// Cascos y Equipo de Protección (Categoría 3)
const refacciones: Product[] = [
  {
    id: '001RTF-BAL',
    name: 'BALATA FRENO DISCO ITALIKA CS125 DS125/DS150/AT110',
    description: 'Juego de balatas para freno de disco de alta calidad, compatible con varios modelos Italika',
    price: 21.0,
    sku: '001RTF-BAL',
    stock: 78,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/001RTF-BAL.jpg'],
    specifications: {
      tipo: 'Freno de disco',
      material: 'Compuesto cerámico',
      compatibilidad: 'CS125, DS125, DS150, AT110',
      vida_util: '15,000-20,000 km'
    },
    brand: 'Italika',
    featured: true
  },
  {
    id: '003RPF-BAL',
    name: 'BALATA FRENO TAMBOR ST70/ST90/CG125/C90/FT125/CS125',
    description: 'Balatas para freno de tambor de larga duración',
    price: 35.0,
    sku: '003RPF-BAL',
    stock: 112,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/003RPF-BAL.jpg'],
    specifications: {
      tipo: 'Freno de tambor',
      material: 'Compuesto metálico',
      compatibilidad: 'ST70, ST90, CG125, C90, FT125, CS125'
    },
    brand: 'Genérico',
    onSale: true,
    salePrice: 31.5
  },
  {
    id: '092RXF-INT',
    name: 'INTERRUPTOR DE BOMBA FRENO IZQUIERDO TODO MOTOS',
    description: 'Interruptor universal para bomba de freno izquierdo',
    price: 3.0,
    sku: '092RXF-INT',
    stock: 245,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/092RXF-INT.jpg'],
    specifications: {
      tipo: 'Interruptor hidráulico',
      posición: 'Izquierdo',
      voltaje: '12V'
    },
    brand: 'Genérico'
  },
  {
    id: '094RPF-INT',
    name: 'INTERRUPTOR DE FRENO TRASERO TODO MOTOS',
    description: 'Interruptor para luz de freno trasero universal',
    price: 149.0,
    sku: '094RPF-INT',
    stock: 56,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/094RPF-INT.jpg'],
    specifications: {
      tipo: 'Interruptor mecánico',
      aplicación: 'Freno trasero',
      compatibilidad: 'Universal'
    },
    brand: 'Genérico',
    featured: true
  },
  {
    id: '100RPF-BOM',
    name: 'BOMBA FRENO MAESTRA DERECHA P/RC150 CHOPER',
    description: 'Bomba maestra de freno derecha para modelo RC150 Choper',
    price: 168.0,
    sku: '100RPF-BOM',
    stock: 34,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/100RPF-BOM.jpg'],
    specifications: {
      tipo: 'Bomba maestra',
      posición: 'Derecha',
      diámetro: '14mm',
      compatibilidad: 'RC150 Choper'
    },
    brand: 'Genérico'
  },
  {
    id: '117RPF-CHI',
    name: 'CHICOTE DE FRENO DELANETRO FT125/CG125/150',
    description: 'Cable de freno delantero para varios modelos',
    price: 31.0,
    sku: '117RPF-CHI',
    stock: 89,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/117RPF-CHI.jpg'],
    specifications: {
      longitud: '120cm',
      terminales: 'Acero inoxidable',
      compatibilidad: 'FT125, CG125, 150cc'
    },
    brand: 'Genérico',
    onSale: true,
    salePrice: 27.9
  },
  {
    id: '556RHF-PED',
    name: 'PEDAL DE FRENO MC-A',
    description: 'Pedal de freno completo modelo MC-A',
    price: 88.0,
    sku: '556RHF-PED',
    stock: 42,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/556RHF-PED.jpg'],
    specifications: {
      material: 'Acero cromado',
      incluye: 'Resorte y tornillería',
      tipo: 'Pedal completo'
    },
    brand: 'Genérico'
  },
  {
    id: '584RPF-BOM',
    name: 'BOMBA DE FRENO COMPLETA P/ITALIKA FT150/2010-2014',
    description: 'Bomba de freno completa para Italika FT150 2010-2014',
    price: 177.0,
    sku: '584RPF-BOM',
    stock: 28,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/584RPF-BOM.jpg'],
    specifications: {
      modelo: 'FT150',
      años: '2010-2014',
      tipo: 'Bomba completa',
      compatibilidad: 'Italika FT150'
    },
    brand: 'Italika',
    featured: true
  },
  {
    id: '821RPF-RES',
    name: 'RESORTE DE PEDAL DE FRENO YBR125',
    description: 'Resorte de retorno para pedal de freno YBR125',
    price: 17.0,
    sku: '821RPF-RES',
    stock: 156,
    categoryId: 1,
    subcategoryId: 101,
    images: ['/images/catalog/freno/821RPF-RES.jpg'],
    specifications: {
      longitud: '8cm',
      diámetro: '1cm',
      compatibilidad: 'Yamaha YBR125'
    },
    brand: 'Yamaha'
  },
  {
    id: '024RTF-BUJ',
    name: 'BUJE DE MOTOR DS150',
    description: 'Buje de motor de alta resistencia para DS150',
    price: 22.0,
    sku: '024RTF-BUJ',
    stock: 203,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/024RTF-BUJ.jpg'],
    specifications: {
      material: 'Bronce sinterizado',
      diámetro: '25mm',
      compatibilidad: 'DS150'
    },
    brand: 'Genérico',
    onSale: true,
    salePrice: 19.8
  },

  {
    id: '124RTE-TEN',
    name: 'TENSOR DE CADENA GY6 MOTOR',
    description: 'Tensor de cadena para motores tipo GY6',
    price: 29.0,
    sku: '124RTE-TEN',
    stock: 68,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/124RTE-TEN.jpg'],
    specifications: {
      tipo: 'Tensor automático',
      compatibilidad: 'Motores GY6',
      material: 'Aleación de aluminio'
    },
    brand: 'Genérico',
    featured: true
  },
  {
    id: '134RPE-CAB',
    name: 'CABEZA DE MOTOR 125 CG NEGRO',
    description: 'Cabeza de motor completa para CG125 color negro',
    price: 654.0,
    sku: '134RPE-CAB',
    stock: 12,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/134RPE-CAB.jpg'],
    specifications: {
      cilindrada: '125cc',
      color: 'Negro',
      incluye: 'Válvulas y resortes',
      compatibilidad: 'CG125'
    },
    brand: 'Genérico'
  },
  {
    id: '204RPE-TAP',
    name: 'TAPA DE MOTOR DE CG IZQUIERDO FT125/150',
    description: 'Tapa izquierda de motor para modelos CG y FT series',
    price: 649.0,
    sku: '204RPE-TAP',
    stock: 9,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/204RPE-TAP.jpg'],
    specifications: {
      posición: 'Izquierda',
      material: 'Aluminio',
      compatibilidad: 'CG125, FT125, FT150'
    },
    brand: 'Genérico',
    onSale: true,
    salePrice: 584.1
  },
  {
    id: '212RPE-TAP',
    name: 'TAPA IZQUIERDA DE CARTER DEL MOTOR CG125/FT125 PLATA NEGRO',
    description: 'Tapa de carter izquierda bicolor para varios modelos',
    price: 184.0,
    sku: '212RPE-TAP',
    stock: 24,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/212RPE-TAP.jpg'],
    specifications: {
      color: 'Plata/Negro',
      posición: 'Izquierda',
      compatibilidad: 'CG125, FT125'
    },
    brand: 'Genérico'
  },
  {
    id: '507RTE-CAB',
    name: 'CABEZA DE MOTOR COMPLETO MOTONETA 150CC',
    description: 'Cabeza de motor completa para motonetas 150cc',
    price: 281.0,
    sku: '507RTE-CAB',
    stock: 17,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/507RTE-CAB.jpg'],
    specifications: {
      cilindrada: '150cc',
      tipo: 'Motoneta',
      incluye: 'Árbol de levas y balancines'
    },
    brand: 'Genérico',
    featured: true
  },
  {
    id: '850RPE-TAP',
    name: 'TAPA IZQ DE MOTOR YBR125',
    description: 'Tapa izquierda de motor para Yamaha YBR125',
    price: 343.0,
    sku: '850RPE-TAP',
    stock: 11,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/850RPE-TAP.jpg'],
    specifications: {
      posición: 'Izquierda',
      compatibilidad: 'Yamaha YBR125',
      material: 'Aluminio fundido'
    },
    brand: 'Yamaha'
  },
  {
    id: '853RPE-TAP',
    name: 'TAPA DER DE MOTOR YBR125',
    description: 'Tapa derecha de motor para Yamaha YBR125',
    price: 557.0,
    sku: '853RPE-TAP',
    stock: 8,
    categoryId: 1,
    subcategoryId: 102,
    images: ['/images/catalog/motor/853RPE-TAP.jpg'],
    specifications: {
      posición: 'Derecha',
      compatibilidad: 'Yamaha YBR125',
      sellos: 'Incluye retenes nuevos'
    },
    brand: 'Yamaha',
    onSale: true,
    salePrice: 501.3
  },
  {
    id: '296RPF-BAR',
    name: 'BARRA POSAPIES COMPLETA AT110/C70/C90',
    description: 'Barra posapies completa para modelos clásicos',
    price: 124.0,
    sku: '296RPF-BAR',
    stock: 35,
    categoryId: 1,
    subcategoryId: 103,
    images: ['/images/catalog/chasis/296RPF-BAR.jpg'],
    specifications: {
      material: 'Acero cromado',
      incluye: 'Tornillería completa',
      compatibilidad: 'AT110, C70, C90'
    },
    brand: 'Genérico'
  },
  {
    id: '382RPF-SOP',
    name: 'SOPORTE DE MOTOR DS',
    description: 'Soporte estructural para motor modelo DS',
    price: 257.0,
    sku: '382RPF-SOP',
    stock: 22,
    categoryId: 1,
    subcategoryId: 103,
    images: ['/images/catalog/chasis/382RPF-SOP.jpg'],
    specifications: {
      material: 'Acero reforzado',
      peso: '1.8kg',
      compatibilidad: 'DS series'
    },
    brand: 'Genérico',
    featured: true
  },
  {
    id: '940RPF-ESP',
    name: 'ESPEJOS CAFERACER #2 NEGRO',
    description: 'Espejos estilo café racer color negro',
    price: 179.0,
    sku: '940RPF-ESP',
    stock: 47,
    categoryId: 1,
    subcategoryId: 103,
    images: ['/images/catalog/chasis/940RPF-ESP.jpg'],
    specifications: {
      estilo: 'Café racer',
      color: 'Negro',
      ajuste: 'Universal',
      tipo: 'Convexo'
    },
    brand: 'Café Racer'
  },
  {
    id: '1024RPF-PUN-02',
    name: 'PUÑO #2 ROJO',
    description: 'Puños para manubrio color rojo',
    price: 27.0,
    sku: '1024RPF-PUN-02',
    stock: 118,
    categoryId: 1,
    subcategoryId: 103,
    images: ['/images/catalog/chasis/1024RPF-PUN-02.jpg'],
    specifications: {
      color: 'Rojo',
      material: 'Goma antideslizante',
      longitud: '12cm'
    },
    brand: 'Genérico',
    onSale: true,
    salePrice: 24.3
  },

  {
    id: '1045RPF-PUN-03',
    name: 'PUÑO #23 C LED MORADO',
    description: 'Puños para manubrio con iluminación LED color morado',
    price: 90.0,
    sku: '1045RPF-PUN-03',
    stock: 62,
    categoryId: 1,
    subcategoryId: 103,
    images: ['/images/catalog/chasis/1045RPF-PUN-03.jpg'],
    specifications: {
      color: 'Morado',
      iluminación: 'LED integrado',
      alimentación: 'Batería CR2032',
      material: 'Silicona resistente'
    },
    brand: 'Genérico',
    featured: true,
    onSale: true,
    salePrice: 81.0
  },
  {
    id: '1025A-CHA',
    name: 'CUADRO PARA CHASIS 234',
    description: 'Estructura completa de chasis modelo 234',
    price: 900.0,
    sku: '1025A-CHA',
    stock: 7,
    categoryId: 1,
    subcategoryId: 103,
    images: ['/images/catalog/chasis/1025A-CHA.jpg'],
    specifications: {
      material: 'Acero al carbono',
      peso: '15kg',
      acabado: 'Pintura epóxica',
      garantía: '2 años'
    },
    brand: 'Genérico'
  },
  {
    id: '52147F-CHA',
    name: 'CHASIS PARA HONDA YBR',
    description: 'Chasis completo original para Honda YBR',
    price: 1200.0,
    sku: '52147F-CHA',
    stock: 4,
    categoryId: 1,
    subcategoryId: 103,
    images: ['/images/catalog/chasis/52147F-CHA.jpg'],
    specifications: {
      compatibilidad: 'Honda YBR',
      incluye: 'Documentación y certificado',
      material: 'Acero especial',
      color: 'Negro'
    },
    brand: 'Honda',
    featured: true
  },
  {
    id: '586RPF-SAL',
    name: 'SALPICADERA DELANTERA ROJO Y NEGRO FT150/2009-2010',
    description: 'Salpicadera delantera bicolor para FT150 modelos 2009-2010',
    price: 133.0,
    sku: '586RPF-SAL',
    stock: 18,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/586RPF-SAL.jpg'],
    specifications: {
      color: 'Rojo/Negro',
      años: '2009-2010',
      material: 'Plástico ABS',
      compatibilidad: 'FT150'
    },
    brand: 'Italika'
  },
  {
    id: '712RPF-SAL-R',
    name: 'SALPICADERA DEL. FT125 ROJO',
    description: 'Salpicadera delantera color rojo para FT125',
    price: 200.0,
    sku: '712RPF-SAL-R',
    stock: 23,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/712RPF-SAL-R.jpg'],
    specifications: {
      color: 'Rojo sólido',
      posición: 'Delantera',
      compatibilidad: 'FT125',
      acabado: 'Brillante'
    },
    brand: 'Italika',
    onSale: true,
    salePrice: 180.0
  },
  {
    id: '767RPF-TAP',
    name: 'TAPAS LATERALES CARGO 150',
    description: 'Juego completo de tapas laterales para Cargo 150',
    price: 150.0,
    sku: '767RPF-TAP',
    stock: 31,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/767RPF-TAP.jpg'],
    specifications: {
      cantidad: '2 piezas',
      color: 'Negro',
      compatibilidad: 'Cargo 150',
      material: 'Polipropileno'
    },
    brand: 'Italika'
  },
  {
    id: '731RPF-TAN',
    name: 'CUBIERTA TANQUE GASOLINA',
    description: 'Cubierta protectora para tanque de gasolina universal',
    price: 400.0,
    sku: '731RPF-TAN',
    stock: 14,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/731RPF-TAN.jpg'],
    specifications: {
      material: 'Cuero sintético',
      protección: 'Antirrayaduras',
      ajuste: 'Universal',
      color: 'Negro'
    },
    brand: 'Genérico',
    featured: true
  },
  {
    id: '731RPF-TAP',
    name: 'TAPAS LATERALES RODA 200',
    description: 'Tapas laterales para modelo Roda 200',
    price: 250.0,
    sku: '731RPF-TAP',
    stock: 9,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/731RPF-TAP.jpg'],
    specifications: {
      lado: 'Ambos lados',
      color: 'Plateado',
      compatibilidad: 'Roda 200',
      material: 'Aleación ligera'
    },
    brand: 'Roda'
  },
  {
    id: '624RPF-SAL',
    name: 'SALPICADERA NEGRA Z250',
    description: 'Salpicadera trasera color negro para Z250',
    price: 150.0,
    sku: '624RPF-SAL',
    stock: 27,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/624RPF-SAL.jpg'],
    specifications: {
      posición: 'Trasera',
      color: 'Negro mate',
      compatibilidad: 'Kawasaki Z250',
      material: 'Plástico reforzado'
    },
    brand: 'Kawasaki'
  },
  {
    id: '856RPF-CUB',
    name: 'CUBIERTA XT IZQUIERDA',
    description: 'Cubierta lateral izquierda para modelo XT',
    price: 180.0,
    sku: '856RPF-CUB',
    stock: 16,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/856RPF-CUB.jpg'],
    specifications: {
      lado: 'Izquierdo',
      color: 'Estándar',
      compatibilidad: 'Serie XT',
      material: 'Polietileno'
    },
    brand: 'Yamaha',
    onSale: true,
    salePrice: 162.0
  },
  {
    id: '978RPF-SAL',
    name: 'SALPICADERA AZUL D150',
    description: 'Salpicadera completa color azul para D150',
    price: 400.0,
    sku: '978RPF-SAL',
    stock: 11,
    categoryId: 1,
    subcategoryId: 104,
    images: ['/images/catalog/plasticos/978RPF-SAL.jpg'],
    specifications: {
      color: 'Azul metálico',
      tipo: 'Completa',
      compatibilidad: 'D150',
      material: 'ABS moldeado'
    },
    brand: 'Italika',
    featured: true
  },
  {
    id: '179RPF-CAD',
    name: 'CADENA 428H*126',
    description: 'Cadena de transmisión de alta resistencia 428H con 126 eslabones',
    price: 94.0,
    sku: '179RPF-CAD',
    stock: 58,
    categoryId: 1,
    subcategoryId: 105,
    images: ['/images/catalog/traccion/179RPF-CAD.jpg'],
    specifications: {
      tipo: 'Cadena de rodillos',
      modelo: '428H',
      eslabones: '126',
      material: 'Acero al carbono templado',
      resistencia: 'Rotura a 5,600 kg'
    },
    brand: 'DID',
    featured: true
  },
  {
    id: '184RPF-TEN',
    name: 'TENSOR DE CADENA PARA CG FT125',
    description: 'Tensor de cadena ajustable para modelos CG y FT125',
    price: 10.0,
    sku: '184RPF-TEN',
    stock: 142,
    categoryId: 1,
    subcategoryId: 105,
    images: ['/images/catalog/traccion/184RPF-TEN.jpg'],
    specifications: {
      ajuste: 'Mecánico',
      compatibilidad: 'CG125, FT125',
      material: 'Aleación de aluminio'
    },
    brand: 'Genérico'
  },
  {
    id: '717RPF-CUB',
    name: 'CUBRE CADENA FT125',
    description: 'Cubrecadenas completo para modelo FT125',
    price: 39.0,
    sku: '717RPF-CUB',
    stock: 76,
    categoryId: 1,
    subcategoryId: 105,
    images: ['/images/catalog/traccion/717RPF-CUB.jpg'],
    specifications: {
      color: 'Negro',
      material: 'Plástico ABS',
      incluye: 'Tornillería completa',
      compatibilidad: 'FT125'
    },
    brand: 'Italika',
    onSale: true,
    salePrice: 35.1
  },
  {
    id: '837RPE-ENG',
    name: 'ENGRANE DE CADENA DISTRIBUCION YBR125',
    description: 'Engrane de cadena de distribución para Yamaha YBR125',
    price: 51.0,
    sku: '837RPE-ENG',
    stock: 34,
    categoryId: 1,
    subcategoryId: 105,
    images: ['/images/catalog/traccion/837RPE-ENG.jpg'],
    specifications: {
      dientes: '38',
      material: 'Acero tratado',
      compatibilidad: 'Yamaha YBR125'
    },
    brand: 'Yamaha'
  },
  {
    id: '838RPE-GUI',
    name: 'GUIAS DE CADENA DE DISTRIBUCION YBR125',
    description: 'Juego de guías para cadena de distribución YBR125',
    price: 86.0,
    sku: '838RPE-GUI',
    stock: 28,
    categoryId: 1,
    subcategoryId: 105,
    images: ['/images/catalog/traccion/838RPE-GUI.jpg'],
    specifications: {
      material: 'Nylon reforzado',
      incluye: 'Guía superior e inferior',
      compatibilidad: 'Yamaha YBR125'
    },
    brand: 'Yamaha',
    featured: true
  },
  {
    id: '893ACC-EXT',
    name: 'CORTADOR DE CADENA 420-428',
    description: 'Herramienta profesional para cortar cadenas 420-428',
    price: 103.0,
    sku: '893ACC-EXT',
    stock: 19,
    categoryId: 1,
    subcategoryId: 105,
    images: ['/images/catalog/traccion/893ACC-EXT.jpg'],
    specifications: {
      compatibilidad: 'Cadenas 420-428',
      material: 'Acero cromo-vanadio',
      peso: '0.8 kg'
    },
    brand: 'Motion Pro'
  },
  {
    id: '254RPF-LLA',
    name: 'LLANTA 2.75-18 (6PR)',
    description: 'Llanta delantera para moto 2.75-18 con 6 capas de resistencia',
    price: 257.0,
    sku: '254RPF-LLA',
    stock: 42,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/254RPF-LLA.jpg'],
    specifications: {
      medida: '2.75-18',
      PR: '6',
      tipo: 'Con cámara',
      uso: 'Todo terreno'
    },
    brand: 'Michelin',
    onSale: true,
    salePrice: 231.3
  },
  {
    id: '261RPF-LLA',
    name: 'LLANTA 130/90-15 TL (8PR)',
    description: 'Llanta trasera sin cámara 130/90-15 con 8 capas',
    price: 610.0,
    sku: '261RPF-LLA',
    stock: 23,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/261RPF-LLA.jpg'],
    specifications: {
      medida: '130/90-15',
      PR: '8',
      tipo: 'Tubeless',
      banda: 'Diseño mixto carretera/terracería'
    },
    brand: 'Pirelli',
    featured: true
  },
  {
    id: '346RPF-RIN',
    name: 'RIN TRASERO FT125 NEGRO',
    description: 'Rin trasero color negro para modelo FT125',
    price: 702.0,
    sku: '346RPF-RIN',
    stock: 14,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/346RPF-RIN.jpg'],
    specifications: {
      material: 'Aleación de aluminio',
      color: 'Negro',
      diámetro: '18 pulgadas',
      compatibilidad: 'FT125'
    },
    brand: 'Italika'
  },
  {
    id: '353RPF-PES',
    name: 'PORTA-CATARINA P/MOTO TRABAJO Y C70 C90 C100 AT110',
    description: 'Porta-catarina reforzado para motos de trabajo y modelos clásicos',
    price: 104.0,
    sku: '353RPF-PES',
    stock: 67,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/353RPF-PES.jpg'],
    specifications: {
      material: 'Acero estampado',
      grosor: '4mm',
      compatibilidad: 'C70, C90, C100, AT110'
    },
    brand: 'Genérico'
  },
  {
    id: '403RXF-BAE',
    name: 'BALERO SILENCIOSO ALTA CALIDAD 6002-2RS',
    description: 'Balero de alta calidad con sellos para operación silenciosa',
    price: 11.0,
    sku: '403RXF-BAE',
    stock: 186,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/403RXF-BAE.jpg'],
    specifications: {
      modelo: '6002-2RS',
      medidas: '15x32x9mm',
      tipo: 'Rígido de bolas',
      sellos: 'Doble (2RS)',
      rpm_max: '12,000'
    },
    brand: 'NSK',
    onSale: true,
    salePrice: 9.9
  },
  {
    id: '713RPF-RIN',
    name: 'RIN DELANTERO FT125',
    description: 'Rin delantero original para modelo FT125',
    price: 754.0,
    sku: '713RPF-RIN',
    stock: 8,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/713RPF-RIN.jpg'],
    specifications: {
      diámetro: '17 pulgadas',
      material: 'Aleación de aluminio',
      ancho: '2.15 pulgadas',
      color: 'Plateado',
      compatibilidad: 'FT125'
    },
    brand: 'Italika',
    featured: true
  },
  {
    id: '1067RPF-LLA',
    name: 'LLANTA 110/70/17 TL',
    description: 'Llanta delantera sin cámara para deportivas',
    price: 318.0,
    sku: '1067RPF-LLA',
    stock: 27,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/1067RPF-LLA.jpg'],
    specifications: {
      medida: '110/70-17',
      tipo: 'Tubeless',
      PR: '4',
      diseño: 'Bandas diagonales',
      uso: 'Carretera'
    },
    brand: 'Dunlop'
  },
  {
    id: '1068RPF-LLA',
    name: 'LLANTA 140/60-17 TL',
    description: 'Llanta trasera de alto desempeño para deportivas',
    price: 640.0,
    sku: '1068RPF-LLA',
    stock: 19,
    categoryId: 1,
    subcategoryId: 106,
    images: ['/images/catalog/rueda/1068RPF-LLA.jpg'],
    specifications: {
      medida: '140/60-17',
      tipo: 'Tubeless',
      PR: '6',
      compuesto: 'Silica para mejor agarre',
      indice_velocidad: 'H (210 km/h)'
    },
    brand: 'Bridgestone',
    featured: true
  },
  {
    id: '264RPF-AMO',
    name: 'AMORTIGUADOR TRASERO REFORZADO MOTO TRABAJO CG125/FT125/150 CROMADO',
    description: 'Amortiguador trasero reforzado con acabado cromado',
    price: 371.0,
    sku: '264RPF-AMO',
    stock: 32,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/264RPF-AMO.jpg'],
    specifications: {
      tipo: 'Hidráulico',
      carga_max: '150 kg',
      recorrido: '90mm',
      acabado: 'Cromado',
      compatibilidad: 'CG125, FT125, 150cc'
    },
    brand: 'YSS'
  },
  {
    id: '279RPF-GOM',
    name: 'CUBRE POLVO AMORTIGUADOR DELANTERO JGO. FT125/CG124',
    description: 'Juego de cubrepolvos para amortiguadores delanteros',
    price: 24.0,
    sku: '279RPF-GOM',
    stock: 143,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/279RPF-GOM.jpg'],
    specifications: {
      material: 'Goma EPDM',
      cantidad: '2 piezas',
      longitud: '180mm',
      compatibilidad: 'FT125, CG125'
    },
    brand: 'Genérico',
    onSale: true,
    salePrice: 21.6
  },
  {
    id: '374RPF-AMO',
    name: 'AMORTIGUADOR TRASERO REFORZADO MOTO TRABAJO FT150 150CC',
    description: 'Amortiguador trasero reforzado para motos de trabajo 150cc',
    price: 390.0,
    sku: '374RPF-AMO',
    stock: 28,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/374RPF-AMO.jpg'],
    specifications: {
      tipo: 'Hidráulico reforzado',
      carga_max: '200 kg',
      regulacion: 'Precarga de 5 posiciones',
      compatibilidad: 'FT150 150cc'
    },
    brand: 'DNM',
    featured: true
  },
  {
    id: '375RPF-AMO',
    name: 'AMORTIGUADOR DELANTERO MOTO TRABAJO CG125/FT125 125CC NEGRO',
    description: 'Amortiguador delantero completo para motos de trabajo',
    price: 537.0,
    sku: '375RPF-AMO',
    stock: 16,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/375RPF-AMO.jpg'],
    specifications: {
      tipo: 'Hidráulico',
      carrera: '120mm',
      color: 'Negro',
      diámetro: '31mm',
      compatibilidad: 'CG125, FT125'
    },
    brand: 'KAYABA'
  },
  {
    id: '463RHF-RES',
    name: 'RESORTE TRASERO MC',
    description: 'Resorte trasero de repuesto para amortiguadores',
    price: 100.0,
    sku: '463RHF-RES',
    stock: 54,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/463RHF-RES.jpg'],
    specifications: {
      longitud: '200mm',
      diámetro: '3.5mm',
      material: 'Acero al carbono',
      color: 'Amarillo'
    },
    brand: 'Hyperpro'
  },
  {
    id: '609RPF-SUS',
    name: 'BARRA DE SUSPENSION DEL WS',
    description: 'Barra estabilizadora para sistema de suspensión delantera',
    price: 639.0,
    sku: '609RPF-SUS',
    stock: 7,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/609RPF-SUS.jpg'],
    specifications: {
      material: 'Acero cromoly',
      diámetro: '22mm',
      longitud: '580mm',
      compatibilidad: 'Modelos WS'
    },
    brand: 'Ohlins',
    featured: true
  },
  {
    id: '720RPF-AMO',
    name: 'JGO. AMORTIGUADORES TRASERO SZ150',
    description: 'Juego completo de amortiguadores traseros para modelo SZ150',
    price: 394.0,
    sku: '720RPF-AMO',
    stock: 18,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/720RPF-AMO.jpg'],
    specifications: {
      cantidad: '2 piezas',
      tipo: 'Hidráulicos',
      carga_max: '180 kg',
      ajuste: 'Precarga de 5 posiciones',
      compatibilidad: 'SZ150'
    },
    brand: 'Yamaha',
    featured: true
  },
  {
    id: '746RPF-AMO',
    name: 'JGO. AMORTIGUADORES TRASEROS CARGO 150',
    description: 'Amortiguadores traseros reforzados para modelo Cargo 150',
    price: 398.0,
    sku: '746RPF-AMO',
    stock: 22,
    categoryId: 1,
    subcategoryId: 107,
    images: ['/images/catalog/suspension/746RPF-AMO.jpg'],
    specifications: {
      cantidad: '2 piezas',
      tipo: 'Hidráulicos reforzados',
      carga_max: '250 kg',
      color: 'Negro/Rojo',
      compatibilidad: 'Cargo 150'
    },
    brand: 'Italika',
    onSale: true,
    salePrice: 358.2
  },
  {
    id: '040RPF-REG',
    name: 'REGULADOR RECTIFICADOR SUZUKI GN125 EN125',
    description: 'Regulador de voltaje para modelos Suzuki GN125 y EN125',
    price: 134.0,
    sku: '040RPF-REG',
    stock: 37,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/040RPF-REG.jpg'],
    specifications: {
      voltaje: '12V',
      corriente: '18A',
      tipo: 'Regulador/Rectificador',
      compatibilidad: 'Suzuki GN125, EN125'
    },
    brand: 'Suzuki'
  },
  {
    id: '050RPE-EST',
    name: 'ESTATOR 6 BOBINAS 110CC DINAMO METRO/ATV150 ITALIKA',
    description: 'Estator de 6 bobinas para motores 110cc y ATV150 Italika',
    price: 168.0,
    sku: '050RPE-EST',
    stock: 29,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/050RPE-EST.jpg'],
    specifications: {
      bobinas: '6',
      voltaje: '12V',
      potencia: '150W',
      compatibilidad: '110cc, ATV150 Italika'
    },
    brand: 'Italika',
    featured: true
  },
  {
    id: '053RXF-SOL',
    name: 'SOLENOIDE DE ARRANQUE UNIVERSAL CG125/FT125/FT150 12V',
    description: 'Solenoide de arranque universal para múltiples modelos',
    price: 57.0,
    sku: '053RXF-SOL',
    stock: 84,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/053RXF-SOL.jpg'],
    specifications: {
      voltaje: '12V',
      corriente: '100A',
      terminales: '4 conectores',
      compatibilidad: 'CG125, FT125, FT150'
    },
    brand: 'Genérico',
    onSale: true,
    salePrice: 51.3
  },
  {
    id: '072RPF-DIR',
    name: 'DIRECCIONAL YAMAHA YBR125/FT150/FT125/FT110',
    description: 'Direccional delantera compatible con múltiples modelos',
    price: 63.0,
    sku: '072RPF-DIR',
    stock: 67,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/072RPF-DIR.jpg'],
    specifications: {
      posición: 'Delantera',
      voltaje: '12V',
      potencia: '10W',
      compatibilidad: 'YBR125, FT150, FT125, FT110'
    },
    brand: 'Yamaha'
  },
  {
    id: '074RPF-DIR',
    name: 'DIRECCIONAL CHOPER (MINI)',
    description: 'Direccional estilo chopper de tamaño reducido',
    price: 63.0,
    sku: '074RPF-DIR',
    stock: 52,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/074RPF-DIR.jpg'],
    specifications: {
      estilo: 'Chopper',
      tamaño: 'Mini',
      voltaje: '12V',
      montaje: 'Universal'
    },
    brand: 'Custom'
  },
  {
    id: '090RPF-STO',
    name: 'STOP TRASERO COMPLETO CG125/FT125',
    description: 'Luz de stop trasero completa para CG125 y FT125',
    price: 57.0,
    sku: '090RPF-STO',
    stock: 93,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/090RPF-STO.jpg'],
    specifications: {
      tipo: 'LED',
      voltaje: '12V',
      color: 'Rojo',
      compatibilidad: 'CG125, FT125'
    },
    brand: 'Genérico'
  },
  {
    id: '310RTF-SWI',
    name: 'SWITCH P/MOTONETA DS125/150',
    description: 'Switch completo para motonetas DS125/150',
    price: 154.0,
    sku: '310RTF-SWI',
    stock: 31,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/310RTF-SWI.jpg'],
    specifications: {
      funciones: 'Luces, direccionales, arranque',
      voltaje: '12V',
      compatibilidad: 'DS125, DS150'
    },
    brand: 'Italika',
    featured: true
  },
  {
    id: '594RPF-SWI-01',
    name: 'SWITCH C/LLAVE AT110',
    description: 'Switch con llave de encendido para AT110',
    price: 60.0,
    sku: '594RPF-SWI-01',
    stock: 48,
    categoryId: 1,
    subcategoryId: 108,
    images: ['/images/catalog/electrico/594RPF-SWI-01.jpg'],
    specifications: {
      tipo: 'Switch con llave',
      posiciones: '3 (OFF-ON-LOCK)',
      voltaje: '12V',
      compatibilidad: 'AT110'
    },
    brand: 'Honda',
    onSale: true,
    salePrice: 54.0
  }
]

// Frenos y Suspensión (Categoría 1, Subcategorías 101 y 107)
const accesorios: Product[] = [
  {
    id: '586RPF-MAL',
    name: 'Maletero grande universal',
    description: 'Maletero de gran capacidad con diseño universal para todo tipo de motocicletas',
    price: 999.0,
    sku: '586RPF-MAL',
    stock: 28,
    categoryId: 2,
    subcategoryId: 201,
    images: ['/images/catalog/maleteros/586RPF-MAL.jpg'],
    specifications: {
      capacidad: '45 litros',
      material: 'ABS reforzado',
      dimensiones: '40×35×30 cm',
      peso: '3.5 kg',
      color: 'Negro mate',
      montaje: 'Sistema universal Quick-Lock'
    },
    brand: 'Givi',
    featured: true,
    onSale: true,
    salePrice: 899.1
  },
  {
    id: '635RPF-MAL',
    name: 'Maletero compacto para moto',
    description: 'Maletero aerodinámico perfecto para uso urbano con fácil instalación',
    price: 1200.0,
    sku: '635RPF-MAL',
    stock: 15,
    categoryId: 2,
    subcategoryId: 201,
    images: ['/images/catalog/maleteros/635RPF-MAL.jpg'],
    specifications: {
      capacidad: '32 litros',
      material: 'Policarbonato',
      resistencia: 'IP67 (impermeable)',
      sistema: 'Monokey',
      color: 'Plateado'
    },
    brand: 'Shad'
  },
  {
    id: '712RPF-MAL',
    name: 'Maletero rígido con cerradura',
    description: 'Maletero de seguridad con doble cerradura y protección antirrobo',
    price: 800.0,
    sku: '712RPF-MAL',
    stock: 22,
    categoryId: 2,
    subcategoryId: 201,
    images: ['/images/catalog/maleteros/712RPF-MAL.jpg'],
    specifications: {
      capacidad: '36 litros',
      cerraduras: 'Doble sistema antipalanca',
      material: 'Aleación de aluminio',
      certificación: 'Norma Sold Secure'
    },
    brand: 'Kappa'
  },
  {
    id: '767RPF-MAL',
    name: 'Maletero con luz LED integrada',
    description: 'Maletero con iluminación LED interior para mejor visibilidad nocturna',
    price: 750.0,
    sku: '767RPF-MAL',
    stock: 35,
    categoryId: 2,
    subcategoryId: 201,
    images: ['/images/catalog/maleteros/767RPF-MAL.jpg'],
    specifications: {
      capacidad: '30 litros',
      luces: 'LED blancos 6000K',
      alimentación: 'Batería recargable',
      autonomía: '20 horas',
      material: 'ABS resistente'
    },
    brand: 'SW-Motech',
    featured: true
  },
  {
    id: '589RPF-POR',
    name: 'Portaplacas reforzado de aluminio',
    description: 'Soporte para placa de aluminio aeronáutico de alta resistencia',
    price: 500.0,
    sku: '589RPF-POR',
    stock: 40,
    categoryId: 2,
    subcategoryId: 202,
    images: ['images/catalog/portaplacas/589RPF-POR.jpg'],
    specifications: {
      material: 'Aluminio 6061-T6',
      grosor: '5mm',
      tratamiento: 'Anodizado',
      compatibilidad: 'Universal',
      peso: '850g'
    },
    brand: 'Motobox'
  },
  {
    id: '624RPF-POR',
    name: 'Portaplacas universal ajustable',
    description: 'Soporte adaptable para cualquier placa con sistema de fijación rápida',
    price: 350.0,
    sku: '624RPF-POR',
    stock: 65,
    categoryId: 2,
    subcategoryId: 202,
    images: ['/images/catalog/portaplacas/624RPF-POR.jpg'],
    specifications: {
      material: 'Acero inoxidable',
      rango_ajuste: '15-20 cm',
      protección: 'Antivibración',
      incluye: 'Kit completo de montaje'
    },
    brand: 'Universal Parts',
    onSale: true,
    salePrice: 315.0
  },
  {
    id: '648RPF-POR',
    name: 'Portaplacas con luz integrada',
    description: 'Soporte para placa con iluminación LED integrada para mayor visibilidad',
    price: 600.0,
    sku: '648RPF-POR',
    stock: 30,
    categoryId: 2,
    subcategoryId: 202,
    images: ['/images/catalog/portaplacas/648RPF-POR.jpg'],
    specifications: {
      luces: 'LED rojos',
      potencia: '3W',
      conexión: 'Directa a sistema eléctrico',
      material: 'ABS resistente a UV'
    },
    brand: 'CustomLED',
    featured: true
  },
  {
    id: '703RPF-POR',
    name: 'Portaplacas deportivo minimalista',
    description: 'Diseño aerodinámico y ligero para motos deportivas',
    price: 450.0,
    sku: '703RPF-POR',
    stock: 25,
    categoryId: 2,
    subcategoryId: 202,
    images: ['/images/catalog/portaplacas/703RPF-POR.jpg'],
    specifications: {
      material: 'Fibra de carbono',
      peso: '320g',
      montaje: 'Sistema rápido',
      incluye: 'Adaptadores para múltiples modelos'
    },
    brand: 'Rizoma'
  },
  {
    id: '532RPF-CEL',
    name: 'Portacelular impermeable para moto',
    description: 'Soporte resistente al agua con sistema de fijación ultra seguro',
    price: 300.0,
    sku: '532RPF-CEL',
    stock: 85,
    categoryId: 2,
    subcategoryId: 203,
    images: ['/images/catalog/portacelulares/532RPF-CEL.jpg'],
    specifications: {
      protección: 'IP68',
      tamaño: 'Hasta 6.7 pulgadas',
      cierre: 'Sistema Quad-Lock',
      material: 'Policarbonato reforzado'
    },
    brand: 'Quad Lock'
  },
  {
    id: '618RPF-CEL',
    name: 'Portacelular con soporte giratorio',
    description: 'Soporte con rotación 360° para perfecta visualización en cualquier ángulo',
    price: 259.0,
    sku: '618RPF-CEL',
    stock: 60,
    categoryId: 2,
    subcategoryId: 203,
    images: ['/images/catalog/portacelulares/618RPF-CEL.jpg'],
    specifications: {
      rotación: '360° ajustable',
      fijación: 'Sistema magnético MagSafe',
      compatibilidad: 'Universal',
      material: 'Aleación de aluminio'
    },
    brand: 'SP Connect',
    featured: true
  },
  {
    id: '697RPF-CEL',
    name: 'Portacelular reforzado con agarre ajustable',
    description: 'Soporte ultra resistente con mecanismo de agarre adaptable a diferentes tamaños de celular',
    price: 200.0,
    sku: '697RPF-CEL',
    stock: 45,
    categoryId: 2,
    subcategoryId: 203,
    images: ['/images/catalog/portacelulares/697RPF-CEL.jpg'],
    specifications: {
      material: 'Aleación de aluminio + goma EVA',
      rango_tamaños: '4-7 pulgadas',
      ajuste: 'Palanca de presión',
      resistencia: 'Hasta 50 kg de fuerza',
      vibración: 'Amortiguación de 85%'
    },
    brand: 'RAM Mounts',
    onSale: true,
    salePrice: 180.0
  },
  {
    id: '745RPF-CEL',
    name: 'Portacelular con carga inalámbrica',
    description: 'Soporte premium con tecnología Qi de carga inalámbrica integrada',
    price: 380.0,
    sku: '745RPF-CEL',
    stock: 28,
    categoryId: 2,
    subcategoryId: 203,
    images: ['/images/catalog/portacelulares/745RPF-CEL.jpg'],
    specifications: {
      carga: '15W Qi Fast Charge',
      compatibilidad: 'iPhone/Android con Qi',
      conexión: 'USB-C PD 3.0',
      ángulo: 'Ajuste 360°',
      protección: 'IP54 resistente a salpicaduras'
    },
    brand: 'SP Connect',
    featured: true
  },

  // Seguridad (Subcategory 205)
  {
    id: '572RPF-CAN',
    name: 'Candado de disco con alarma',
    description: 'Sistema de seguridad con alarma de 120dB y protección máxima contra cortes',
    price: 200.0,
    sku: '572RPF-CAN',
    stock: 52,
    categoryId: 2,
    subcategoryId: 205,
    images: ['/images/catalog/candados/572RPF-CAN.jpg'],
    specifications: {
      alarma: '120dB (activación por vibración)',
      material: 'Acero endurecido 16mm',
      protección: 'Anti-taladro, anti-palanca',
      certificación: 'Sold Secure Diamond',
      batería: 'CR2 (dura 1 año)'
    },
    brand: 'ABUS'
  },
  {
    id: '629RPF-CAN',
    name: 'Candado reforzado antirrobo',
    description: 'Candado de seguridad con diseño compacto pero máxima protección',
    price: 180.0,
    sku: '629RPF-CAN',
    stock: 67,
    categoryId: 2,
    subcategoryId: 205,
    images: ['/images/catalog/candados/629RPF-CAN.jpg'],
    specifications: {
      material: 'Acero carburo 14mm',
      resistencia: '15 toneladas',
      tipo: 'Cilindro de seguridad',
      llave: 'Doble punto de contacto'
    },
    brand: 'Oxford'
  },
  {
    id: '684RPF-CAN',
    name: 'Candado en U de alta seguridad',
    description: 'Protección profesional con barra en U de máxima resistencia',
    price: 250.0,
    sku: '684RPF-CAN',
    stock: 34,
    categoryId: 2,
    subcategoryId: 205,
    images: ['/images/catalog/candados/684RPF-CAN.jpg'],
    specifications: {
      material: 'Acero martensítico 18mm',
      protección: 'Anti-sierra, anti-cizalla',
      interior: 'Protección de mangas giratorias',
      certificación: 'ART 3 estrellas'
    },
    brand: 'Kryptonite',
    featured: true
  },
  {
    id: '701RPF-CAN',
    name: 'Candado de cadena con combinación',
    description: 'Sistema de seguridad sin llaves con cadena reforzada de 10mm',
    price: 300.0,
    sku: '701RPF-CAN',
    stock: 29,
    categoryId: 2,
    subcategoryId: 205,
    images: ['/images/catalog/candados/701RPF-CAN.jpg'],
    specifications: {
      longitud_cadena: '1.2 metros',
      grosor: '10mm eslabones endurecidos',
      combinación: '4 dígitos (10,000 combinaciones)',
      material: 'Acero templado con nylon revestido'
    },
    brand: 'OnGuard',
    onSale: true,
    salePrice: 270.0
  },

  // Stickers/Decoración (Subcategory 206)
  {
    id: '563RPF-STI',
    name: 'Sticker reflectante para rines',
    description: 'Cinta adhesiva reflectante para rines que mejora la visibilidad nocturna',
    price: 200.0,
    sku: '563RPF-STI',
    stock: 120,
    categoryId: 2,
    subcategoryId: 206,
    images: ['/images/catalog/stickers/563RPF-STI.jpg'],
    specifications: {
      color: 'Blanco/rojo/azul',
      longitud: '5 metros',
      ancho: '6mm/10mm',
      reflectividad: 'Nivel diamante (1000 candelas)'
    },
    brand: '3M'
  },
  {
    id: '627RPF-STI',
    name: 'Sticker decorativo para tanque de gasolina',
    description: 'Vinilos personalizables de alta calidad para personalización de motos',
    price: 150.0,
    sku: '627RPF-STI',
    stock: 85,
    categoryId: 2,
    subcategoryId: 206,
    images: ['/images/catalog/stickers/627RPF-STI.jpg'],
    specifications: {
      material: 'Vinilo calendario 3M',
      duración: '5+ años exterior',
      acabado: 'Mate/brillante/gloss',
      aplicación: 'Transfer seco'
    },
    brand: 'Motografix'
  },
  {
    id: '691RPF-STI',
    name: 'Sticker resistente a la intemperie',
    description: 'Adhesivos profesionales resistentes a UV, agua y cambios de temperatura',
    price: 120.0,
    sku: '691RPF-STI',
    stock: 150,
    categoryId: 2,
    subcategoryId: 206,
    images: ['/images/catalog/stickers/691RPF-STI.jpg'],
    specifications: {
      resistencia: 'IP67 (totalmente impermeable)',
      UV: 'Protección 10+ años',
      temperatura: '-30°C a +80°C',
      aplicación: 'Superficies curvas'
    },
    brand: 'Slipstream',
    featured: true
  },
  {
    id: '708RPF-STI',
    name: 'Sticker con diseño deportivo',
    description: 'Vinilos de alto impacto visual con diseños aerodinámicos para motos deportivas',
    price: 200.0,
    sku: '708RPF-STI',
    stock: 75,
    categoryId: 2,
    subcategoryId: 206,
    images: ['/images/catalog/stickers/708RPF-STI.jpg'],
    specifications: {
      diseños: 'Flamas/Rayas deportivas/Logos racing',
      material: 'Vinilo air-release',
      aplicación: 'Transfer seco profesional',
      durabilidad: '5 años exterior'
    },
    brand: 'MotoStyle',
    featured: true
  },
  {
    id: '734RPF-STI',
    name: 'Sticker protector para cuadro de moto',
    description: 'Protección transparente contra rozaduras para zonas vulnerables del chasis',
    price: 174.0,
    sku: '734RPF-STI',
    stock: 92,
    categoryId: 2,
    subcategoryId: 206,
    images: ['/images/catalog/stickers/734RPF-STI.jpg'],
    specifications: {
      material: 'Poliuretano transparente 0.8mm',
      protección: 'Anti-abrasiones/impactos',
      zonas: 'Tubos de chasis/carenados',
      autocuración: 'Ligeros arañazos'
    },
    brand: '3M',
    onSale: true,
    salePrice: 156.6
  },

  // Asientos (Subcategory 207)
  {
    id: '548RPF-ASI',
    name: 'Cubierta de asiento antideslizante',
    description: 'Funda con superficie texturizada para máxima adherencia en todo terreno',
    price: 400.0,
    sku: '548RPF-ASI',
    stock: 38,
    categoryId: 2,
    subcategoryId: 207,
    images: ['/images/catalog/cubreasiento/548RPF-ASI.jpg'],
    specifications: {
      material: 'Neopreno 5mm con grip 3D',
      efecto: 'Reduce fatiga en viajes largos',
      ajuste: 'Universal elástico',
      lavado: 'Máquina (30°C)'
    },
    brand: 'Airhawk'
  },
  {
    id: '615RPF-ASI',
    name: 'Cubierta de asiento impermeable',
    description: 'Protección completa contra lluvia con transpirabilidad mejorada',
    price: 350.0,
    sku: '615RPF-ASI',
    stock: 45,
    categoryId: 2,
    subcategoryId: 207,
    images: ['/images/catalog/cubreasiento/615RPF-ASI.jpg'],
    specifications: {
      material: 'Poliéster laminado TPU',
      impermeabilidad: 'Columna de agua 10,000mm',
      transpiración: '1,500g/m²/24h',
      costuras: 'Selladas termicamente'
    },
    brand: 'Oxford',
    featured: true
  },
  {
    id: '679RPF-ASI',
    name: 'Cubierta de asiento térmica',
    description: 'Regulación térmica para mayor comodidad en climas extremos',
    price: 250.0,
    sku: '679RPF-ASI',
    stock: 52,
    categoryId: 2,
    subcategoryId: 207,
    images: ['/images/catalog/cubreasiento/679RPF-ASI.jpg'],
    specifications: {
      tecnología: 'AirCell (aislamiento térmico)',
      rango_temperatura: '-20°C a +50°C',
      material: 'Fibra hueca siliconada',
      color: 'Negro/gris'
    },
    brand: 'Givi'
  },
  {
    id: '702RPF-ASI',
    name: 'Cubierta de asiento con ajuste elástico',
    description: 'Funda universal de fácil instalación con sistema de tensión ajustable',
    price: 500.0,
    sku: '702RPF-ASI',
    stock: 28,
    categoryId: 2,
    subcategoryId: 207,
    images: ['/images/catalog/cubreasiento/702RPF-ASI.jpg'],
    specifications: {
      material: 'Spandex-Lycra reforzado',
      elongación: 'Hasta 300%',
      protección: 'UV50+',
      lavado: '30°C delicado'
    },
    brand: 'Rizoma',
    onSale: true,
    salePrice: 450.0
  }
]

// Motor y Escape (Categoría 1, Subcategoría 102)
const piloto: Product[] = [
  {
    id: '525RPF-CAS',
    name: 'Casco Integral GT-Air II',
    description: 'Casco integral de alta gama con sistema de ventilación avanzado y visor panorámico',
    price: 599.99,
    sku: '525RPF-CAS',
    stock: 15,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/525RPF-CAS.jpg'],
    specifications: {
      talla: 'M (57-58cm)',
      peso: '1550g',
      material: 'Fibra de carbono',
      certificaciones: 'ECE 22.06, DOT',
      visor: 'Panorámico con Pinlock incluido'
    },
    brand: 'SHOEI',
    featured: true,
    onSale: true,
    salePrice: 539.99
  },
  {
    id: '558RPF-CAS',
    name: 'Casco Modular N-100',
    description: 'Casco modular con mentonera retráctil y sistema de comunicación integrado',
    price: 429.99,
    sku: '558RPF-CAS',
    stock: 22,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/558RPF-CAS.jpg'],
    specifications: {
      talla: 'L (59-60cm)',
      peso: '1650g',
      material: 'Policarbonato',
      certificaciones: 'ECE 22.05',
      característica: 'Sistema N-Com compatible'
    },
    brand: 'NOLAN'
  },
  {
    id: '591RPF-CAS',
    name: 'Casco Deportivo RPHA 11',
    description: 'Casco deportivo de competición con aerodinámica optimizada',
    price: 499.99,
    sku: '591RPF-CAS',
    stock: 18,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/591RPF-CAS.jpg'],
    specifications: {
      talla: 'S (55-56cm)',
      peso: '1450g',
      material: 'Fibra de vidrio',
      certificaciones: 'ECE 22.06, FIM',
      ventilación: 'Sistema Advanced Channeling'
    },
    brand: 'HJC',
    featured: true
  },
  {
    id: '624RPF-CAS',
    name: 'Casco Urbano X-Spirit 3',
    description: 'Casco urbano con diseño aerodinámico y amplio campo de visión',
    price: 379.99,
    sku: '624RPF-CAS',
    stock: 30,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/624RPF-CAS.jpg'],
    specifications: {
      talla: 'XL (61-62cm)',
      peso: '1600g',
      material: 'Composite fibra orgánica',
      certificaciones: 'ECE 22.06',
      visor: 'Protección UV 100%'
    },
    brand: 'SHOEI',
    onSale: true,
    salePrice: 341.99
  },
  {
    id: '657RPF-CAS',
    name: 'Casco Trail N70-2',
    description: 'Casco trail con visera panorámica y pantalla interior solar',
    price: 349.99,
    sku: '657RPF-CAS',
    stock: 25,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/657RPF-CAS.jpg'],
    specifications: {
      talla: 'M (57-58cm)',
      peso: '1700g',
      material: 'Policarbonato reforzado',
      certificaciones: 'ECE 22.05',
      pantalla: 'Solar integrada'
    },
    brand: 'NOLAN'
  },
  {
    id: '682RPF-CAS',
    name: 'Casco Jet CL-Max',
    description: 'Casco jet con protección auditiva reducida y diseño retro',
    price: 199.99,
    sku: '682RPF-CAS',
    stock: 40,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/cascos/682RPF-CAS.jpg'],
    specifications: {
      talla: 'L (59-60cm)',
      peso: '1200g',
      material: 'ABS',
      certificaciones: 'ECE 22.05',
      estilo: 'Retro moderno'
    },
    brand: 'HJC'
  },
  {
    id: '715RPF-CAS',
    name: 'Casco Cross N90',
    description: 'Casco cross con mentonera reforzada y ventilación superior',
    price: 279.99,
    sku: '715RPF-CAS',
    stock: 20,
    categoryId: 3,
    subcategoryId: 303,
    images: ['/images/catalog/cascos/715RPF-CAS.jpg'],
    specifications: {
      talla: 'M (57-58cm)',
      peso: '1350g',
      material: 'Policarbonato',
      certificaciones: 'ECE 22.05, DOT',
      ventilación: '4 entradas frontales'
    },
    brand: 'NOLAN',
    featured: true
  },
  {
    id: '748RPF-CAS',
    name: 'Casco Modular Neotec 2',
    description: 'Casco modular premium con sistema de apertura rápida',
    price: 699.99,
    sku: '748RPF-CAS',
    stock: 12,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/748RPF-CAS.jpg'],
    specifications: {
      talla: 'L (59-60cm)',
      peso: '1750g',
      material: 'Fibra de carbono',
      certificaciones: 'ECE 22.06, SHARP 5*',
      sistema: 'Apertura con una mano'
    },
    brand: 'SHOEI'
  },
  {
    id: '781RPF-CAS',
    name: 'Casco Deportivo F70',
    description: 'Casco deportivo con diseño agresivo y máxima ventilación',
    price: 329.99,
    sku: '781RPF-CAS',
    stock: 28,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/781RPF-CAS.jpg'],
    specifications: {
      talla: 'S (55-56cm)',
      peso: '1500g',
      material: 'Fibra de vidrio',
      certificaciones: 'ECE 22.05',
      ventilación: 'Sistema ACS'
    },
    brand: 'HJC',
    onSale: true,
    salePrice: 296.99
  },
  {
    id: '806RPF-CAS',
    name: 'Casco Urbano Crossover',
    description: 'Casco híbrido urbano-trail con visera ajustable',
    price: 369.99,
    sku: '806RPF-CAS',
    stock: 35,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/806RPF-CAS.jpg'],
    specifications: {
      talla: 'XL (61-62cm)',
      peso: '1650g',
      material: 'Composite',
      certificaciones: 'ECE 22.06',
      visera: 'Ajustable en 3 posiciones'
    },
    brand: 'NOLAN'
  },
  {
    id: '832RPF-CAS',
    name: 'Casco Integral Race',
    description: 'Casco de competición con aerodinámica de alto rendimiento',
    price: 749.99,
    sku: '832RPF-CAS',
    stock: 10,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/832RPF-CAS.jpg'],
    specifications: {
      talla: 'M (57-58cm)',
      peso: '1400g',
      material: 'Fibra de carbono',
      certificaciones: 'ECE 22.06, FIM',
      ventilación: 'Sistema de flujo direccional'
    },
    brand: 'SHOEI',
    featured: true
  },
  {
    id: '855RPF-CAS',
    name: 'Casco Modular Flip-up',
    description: 'Casco modular con mecanismo de apertura suave y seguro',
    price: 419.99,
    sku: '855RPF-CAS',
    stock: 18,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/855RPF-CAS.jpg'],
    specifications: {
      talla: 'L (59-60cm)',
      peso: '1700g',
      material: 'Policarbonato reforzado',
      certificaciones: 'ECE 22.05',
      mecanismo: 'Doble pivote'
    },
    brand: 'HJC'
  },
  {
    id: '878RPF-CAS',
    name: 'Casco Scooter V90',
    description: 'Casco específico para scooter con gran campo de visión',
    price: 229.99,
    sku: '878RPF-CAS',
    stock: 45,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/878RPF-CAS.jpg'],
    specifications: {
      talla: 'M (57-58cm)',
      peso: '1550g',
      material: 'ABS',
      certificaciones: 'ECE 22.05',
      visor: 'Amplio panorámico'
    },
    brand: 'NOLAN',
    onSale: true,
    salePrice: 206.99
  },
  {
    id: '901RPF-CAS',
    name: 'Casco Trail Enduro',
    description: 'Casco trail con protección solar integrada y ventilación superior',
    price: 289.99,
    sku: '901RPF-CAS',
    stock: 22,
    categoryId: 3,
    subcategoryId: 303,
    images: ['/images/catalog/cascos/901RPF-CAS.jpg'],
    specifications: {
      talla: 'L (59-60cm)',
      peso: '1600g',
      material: 'Composite',
      certificaciones: 'ECE 22.05',
      pantalla: 'Solar retráctil'
    },
    brand: 'SHOEI'
  },
  {
    id: '924RPF-CAS',
    name: 'Casco Deportivo R-PHA 70',
    description: 'Casco deportivo con diseño aerodinámico y peso reducido',
    price: 459.99,
    sku: '924RPF-CAS',
    stock: 15,
    categoryId: 3,
    subcategoryId: 301,
    images: ['/images/catalog/cascos/924RPF-CAS.jpg'],
    specifications: {
      talla: 'S (55-56cm)',
      peso: '1350g',
      material: 'Fibra de carbono',
      certificaciones: 'ECE 22.06',
      ventilación: 'Sistema Super Flow'
    },
    brand: 'HJC',
    featured: true
  },
  {
    id: '530RPF-CHA',
    name: 'Chaqueta Motociclista Adventure Pro',
    description: 'Chaqueta todoterreno con protección CE nivel 2 y sistema de ventilación adaptable',
    price: 349.99,
    sku: '530RPF-CHA',
    stock: 28,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/530RPF-CHA.jpg'],
    specifications: {
      talla: 'M, L, XL',
      material: 'Cordura 500D + mallas ventiladas',
      protecciones: 'Hombros/codos CE Nivel 2, espalda preparada',
      características: '8 ventilas ajustables, bolsillos impermeables',
      impermeabilidad: 'Membrana interna 10,000mm'
    },
    brand: 'Alpinestars',
    featured: true,
    onSale: true,
    salePrice: 314.99
  },
  {
    id: '577RPF-CHA',
    name: 'Chaqueta Urbana Tech-Air',
    description: 'Diseño urbano con airbag integrado y tecnología smart',
    price: 599.99,
    sku: '577RPF-CHA',
    stock: 15,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/577RPF-CHA.jpg'],
    specifications: {
      talla: 'S, M, L',
      material: 'Tejido inteligente con sensores',
      protecciones: 'Airbag integrado (certificado CE)',
      conectividad: 'Bluetooth para alertas',
      lavado: 'Extraíble electrónica'
    },
    brand: 'Dainese'
  },
  {
    id: '624RPF-CHA',
    name: 'Chaqueta Fourstroke 4',
    description: 'Chaqueta 4 estaciones con sistema de capas intercambiables',
    price: 279.99,
    sku: '624RPF-CHA',
    stock: 35,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/624RPF-CHA.jpg'],
    specifications: {
      talla: 'XS a XXL',
      material: 'Poliamida abrasion-resistant',
      capas: 'Invierno/Verano extraíbles',
      protecciones: 'Hombros/codos CE Nivel 1',
      reflectividad: 'Paneles 360°'
    },
    brand: "Rev'it",
    featured: true
  },
  {
    id: '658RPF-CHA',
    name: 'Chaqueta Leather Racer',
    description: 'Clásica chaqueta de cuero para carretera con ajuste deportivo',
    price: 449.99,
    sku: '658RPF-CHA',
    stock: 22,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/658RPF-CHA.jpg'],
    specifications: {
      talla: '38 a 46 (euro)',
      material: 'Cuero vacuno 1.3mm',
      protecciones: 'Hombros/codos CE Nivel 2',
      forro: 'Removible térmico',
      costuras: 'Reforzadas Kevlar'
    },
    brand: 'Merlin'
  },
  {
    id: '683RPF-CHA',
    name: 'Chaqueta Monsoon Pro',
    description: 'Chaqueta impermeable con tecnología Dryway+ para lluvia intensa',
    price: 229.99,
    sku: '683RPF-CHA',
    stock: 40,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/683RPF-CHA.jpg'],
    specifications: {
      talla: 'M a XXXL',
      material: 'Poliester 600D impermeable',
      sellado: 'Costuras termoselladas',
      protecciones: 'Hombros/codos CE Nivel 1',
      ventilación: 'Cremalleras estratégicas'
    },
    brand: 'Richa',
    onSale: true,
    salePrice: 206.99
  },
  {
    id: '719RPF-CHA',
    name: 'Chaqueta Airflow Mesh',
    description: 'Chaqueta de malla ultraliviana para máximo flujo de aire',
    price: 199.99,
    sku: '719RPF-CHA',
    stock: 50,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/719RPF-CHA.jpg'],
    specifications: {
      talla: 'S a XXL',
      material: 'Malla 3D + poliamida',
      peso: '950g',
      protecciones: 'Hombros/codos CE Nivel 1',
      ventilación: 'Flujo de aire 360°'
    },
    brand: 'Furygan'
  },
  {
    id: '742RPF-CHA',
    name: 'Chaqueta All-Road GTX',
    description: 'Chaqueta trail con membrana Gore-Tex y protecciones D3O',
    price: 529.99,
    sku: '742RPF-CHA',
    stock: 18,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/742RPF-CHA.jpg'],
    specifications: {
      talla: 'M a XXL',
      material: 'Gore-Tex 3L + Cordura',
      protecciones: 'D3O Ghost (Nivel 2)',
      impermeabilidad: 'Garantizada 28,000mm',
      conectividad: 'Compatibile con hidratación'
    },
    brand: 'Klim',
    featured: true
  },
  {
    id: '796RPF-CHA',
    name: 'Chaqueta Urban Armored',
    description: 'Diseño discreto con protecciones removibles para uso diario',
    price: 289.99,
    sku: '796RPF-CHA',
    stock: 30,
    categoryId: 3,
    subcategoryId: 302,
    images: ['/images/catalog/chamarras/796RPF-CHA.jpg'],
    specifications: {
      talla: 'XS a XL',
      material: 'Algodón reforzado + Kevlar',
      protecciones: 'Removibles para lavado',
      estilo: 'Corte slim fit',
      bolsillos: 'RFID protect'
    },
    brand: 'Knox'
  },
  {
    id: '536RPF-ESQ',
    name: 'Chaqueta ExoFrame Pro',
    description: 'Sistema de exoesqueleto externo con estructura de aleación de magnesio y protección nivel CE 2',
    price: 799.99,
    sku: '536RPF-ESQ',
    stock: 12,
    categoryId: 3,
    subcategoryId: 303,
    images: ['/images/catalog/esqueletos/536RPF-ESQ.jpg', '/images/catalog/esqueletos/536RPF-ESQ-2.jpg'],
    specifications: {
      talla: 'M, L, XL',
      estructura: 'Aleación de magnesio AM60',
      protecciones: 'Nivel CE 2 completo (espalda, pecho, hombros, codos)',
      acoplamiento: 'Sistema magnetico Quick-Lock',
      peso: '2.8kg completo',
      compatibilidad: 'Integración con airbag'
    },
    brand: 'Alpinestars',
    featured: true,
    onSale: false
  },
  {
    id: '613RPF-ESQ',
    name: 'Armadura Titan X1',
    description: 'Exoesqueleto modular de titanio grado aeroespacial con sistema de absorción de impacto',
    price: 1199.99,
    sku: '613RPF-ESQ',
    stock: 8,
    categoryId: 3,
    subcategoryId: 303,
    images: ['/images/catalog/esqueletos/613RPF-ESQ.jpg'],
    specifications: {
      talla: 'S a XXL',
      material: 'Titanio Grade 5',
      protecciones: 'Nivel CE 2+ (certificación motoGP)',
      tecnología: 'Sistema D3O® XT',
      ajuste: 'Hidráulico automatizado',
      conectividad: 'Sensores de impacto Bluetooth'
    },
    brand: 'Dainese',
    featured: true,
    onSale: true,
    salePrice: 1079.99
  },
  {
    id: '687RPF-ESQ',
    name: 'ExoArmor Stealth',
    description: 'Armadura externa de bajo perfil con protección nivel militar y diseño discreto',
    price: 649.99,
    sku: '687RPF-ESQ',
    stock: 15,
    categoryId: 3,
    subcategoryId: 303,
    images: ['/images/catalog/esqueletos/687RPF-ESQ.jpg', '/images/catalog/esqueletos/687RPF-ESQ-2.jpg'],
    specifications: {
      talla: 'Única ajustable',
      material: 'Polímero balístico + fibra de carbono',
      protecciones: 'Certificación NIJ IIIA',
      modularidad: '12 puntos de ajuste',
      perfil: '3.5cm grosor máximo',
      resistencia: 'Testeo balístico 9mm'
    },
    brand: 'Forcefield',
    onSale: false
  },
  {
    id: '752RPF-ESQ',
    name: 'AeroSkeleton Race Edition',
    description: 'Exoesqueleto aerodinámico para competición con protección integral y refrigeración activa',
    price: 1499.99,
    sku: '752RPF-ESQ',
    stock: 5,
    categoryId: 3,
    subcategoryId: 303,
    images: ['/images/catalog/esqueletos/752RPF-ESQ.jpg'],
    specifications: {
      talla: 'Personalizada (molde 3D)',
      estructura: 'Fibra de carbono T1000',
      protecciones: 'Nivel CE 2++ (homologación FIM)',
      refrigeración: 'Sistema AirFlow X',
      peso: '2.3kg',
      aerodinámica: 'Túnel de viento probado'
    },
    brand: 'Spidi',
    featured: true,
    onSale: false
  },
  {
    id: '542RPF-GUA',
    name: 'Guantes Racing Pro Carbon',
    description: 'Guantes profesionales para competición con refuerzos de carbono y máxima ventilación',
    price: 249.99,
    sku: '542RPF-GUA',
    stock: 25,
    categoryId: 3,
    subcategoryId: 304,
    images: ['/images/catalog/guantes/542RPF-GUA.jpg'],
    specifications: {
      talla: 'S a XL',
      material: 'Piel de cabra + fibra de carbono',
      protecciones: 'Nudillos carbono, sliders palma',
      ventilación: 'Paneles perforados 3D',
      cierre: 'Micrometrico triple ajuste'
    },
    brand: 'Alpinestars',
    featured: true,
    onSale: true,
    salePrice: 224.99
  },
  {
    id: '586RPF-GUA',
    name: 'Guantes All-Road Gore-Tex',
    description: 'Guantes todoterreno impermeables con membrana Gore-Tex y protección integral',
    price: 189.99,
    sku: '586RPF-GUA',
    stock: 35,
    categoryId: 3,
    subcategoryId: 304,
    images: ['/images/catalog/guantes/586RPF-GUA.jpg'],
    specifications: {
      talla: 'M a XXL',
      material: 'Piel de becerro + Gore-Tex',
      impermeabilidad: '10,000mm columna agua',
      protecciones: 'Nudillos TPU, reforzo palma',
      visibilidad: 'Reflectivos 360°'
    },
    brand: "Rev'it"
  },
  {
    id: '623RPF-GUA',
    name: 'Guantes Urban Tech',
    description: 'Guantes urbanos con touchscreen compatible y protección discreta',
    price: 79.99,
    sku: '623RPF-GUA',
    stock: 60,
    categoryId: 3,
    subcategoryId: 304,
    images: ['/images/catalog/guantes/623RPF-GUA.jpg'],
    specifications: {
      talla: 'XS a XL',
      material: 'Piel sintética + kevlar',
      tecnología: 'Dedos touchscreen',
      protecciones: 'Nudillos termoplásticos',
      ventilación: 'Mallas estratégicas'
    },
    brand: 'Five',
    featured: true
  },
  {
    id: '667RPF-GUA',
    name: 'Guantes Winter Pro',
    description: 'Guantes de invierno con calefacción integrada y protección contra el viento',
    price: 159.99,
    sku: '667RPF-GUA',
    stock: 28,
    categoryId: 3,
    subcategoryId: 304,
    images: ['/images/catalog/guantes/667RPF-GUA.jpg'],
    specifications: {
      talla: 'S a XL',
      material: 'Piel + Primaloft Gold',
      calefacción: '3 niveles (USB recargable)',
      impermeabilidad: '10,000mm',
      protecciones: 'Nudillos de goma EVA'
    },
    brand: 'Rukka',
    onSale: true,
    salePrice: 143.99
  },
  {
    id: '704RPF-GUA',
    name: 'Guantes Track Hyper',
    description: 'Guantes de pista con agarre reforzado y máxima movilidad',
    price: 299.99,
    sku: '704RPF-GUA',
    stock: 18,
    categoryId: 3,
    subcategoryId: 304,
    images: ['/images/catalog/guantes/704RPF-GUA.jpg'],
    specifications: {
      talla: 'S a L',
      material: 'Piel kanguro premium',
      agarre: 'Silicón perforado',
      protecciones: 'Nudillos titanio, sliders palma',
      ergonomía: 'Corte pre-curvado racing'
    },
    brand: 'Dainese'
  },
  {
    id: '739RPF-GUA',
    name: 'Guantes Airflow Mesh',
    description: 'Guantes de malla ultravaporables para máximo flujo de aire',
    price: 89.99,
    sku: '739RPF-GUA',
    stock: 75,
    categoryId: 3,
    subcategoryId: 304,
    images: ['/images/catalog/guantes/739RPF-GUA.jpg'],
    specifications: {
      talla: 'M a XXL',
      material: 'Malla 3D + poliamida',
      protecciones: 'Nudillos termoplásticos',
      ventilación: 'Flujo de aire 360°',
      peso: '120g por guante'
    },
    brand: 'Furygan'
  },
  {
    id: '781RPF-GUA',
    name: 'Guantes Adventure Pro',
    description: 'Guantes trail con protección extendida de muñeca y doble capa',
    price: 169.99,
    sku: '781RPF-GUA',
    stock: 32,
    categoryId: 3,
    subcategoryId: 304,
    images: ['/images/catalog/guantes/781RPF-GUA.jpg'],
    specifications: {
      talla: 'M a XXXL',
      material: 'Piel cabra + Cordura',
      protecciones: 'Nudillos TPU, escudo muñeca',
      versatilidad: 'Forro interno extraíble',
      impermeabilidad: 'Tratamiento HydroGuard'
    },
    brand: 'Klim',
    featured: true
  },
  {
    id: '550RPF-ROD',
    name: 'Rodilleras Racing Pro Carbon',
    description: 'Rodilleras profesionales con caparazón de carbono y sistema de ventilación activa',
    price: 179.99,
    sku: '550RPF-ROD',
    stock: 22,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/550RPF-ROD.jpg'],
    specifications: {
      talla: 'S-XL (circunferencia 33-42cm)',
      material: 'Fibra de carbono + D3O',
      protección: 'Nivel CE 2 (EN 1621-1)',
      ventilación: 'Canales AirFlow',
      ajuste: 'Correas elásticas con gel'
    },
    brand: 'Alpinestars',
    featured: true,
    onSale: true,
    salePrice: 161.99
  },
  {
    id: '582RPF-ROD',
    name: 'Rodilleras Adventure All-Terrain',
    description: 'Protección todoterreno con cobertura extendida y articulación flexible',
    price: 129.99,
    sku: '582RPF-ROD',
    stock: 35,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/582RPF-ROD.jpg'],
    specifications: {
      talla: 'Única ajustable (35-50cm)',
      material: 'TPU moldeado + neopreno',
      protección: 'Nivel CE 1',
      cobertura: 'Tibia superior incluida',
      impermeabilidad: 'Tratamiento HydroShield'
    },
    brand: "Rev'it"
  },
  {
    id: '615RPF-ROD',
    name: 'Rodilleras Urban Slim',
    description: 'Protección discreta de bajo perfil para uso urbano diario',
    price: 89.99,
    sku: '615RPF-ROD',
    stock: 50,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/615RPF-ROD.jpg'],
    specifications: {
      talla: 'XS-XL (ajuste anatómico)',
      material: 'Polímero flexible + malla 3D',
      protección: 'Nivel CE 1',
      perfil: '1.2cm grosor máximo',
      lavado: 'Máquina 30°C'
    },
    brand: 'Knox',
    featured: true
  },
  {
    id: '643RPF-ROD',
    name: 'Rodilleras Enduro Pro',
    description: 'Protección específica para enduro con escudo rotuliano reforzado',
    price: 149.99,
    sku: '643RPF-ROD',
    stock: 28,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/643RPF-ROD.jpg'],
    specifications: {
      talla: 'M-XXL (circunferencia 38-48cm)',
      material: 'Magnesio + elastómero',
      protección: 'Nivel CE 2',
      rotula: 'Escudo anti-impactos',
      ventilación: 'Rejillas laterales'
    },
    brand: 'Leatt'
  },
  {
    id: '679RPF-ROD',
    name: 'Rodilleras Air Flex',
    description: 'Sistema ultraligero transpirable con máxima movilidad',
    price: 109.99,
    sku: '679RPF-ROD',
    stock: 45,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/679RPF-ROD.jpg'],
    specifications: {
      talla: 'S-XL',
      material: 'Composite ventilado',
      protección: 'Nivel CE 1',
      peso: '190g por rodillera',
      ajuste: 'Sistema Bio-Flex'
    },
    brand: 'Fox',
    onSale: true,
    salePrice: 98.99
  },
  {
    id: '712RPF-ROD',
    name: 'Rodilleras Tactical Military',
    description: 'Protección nivel militar con materiales balísticos',
    price: 199.99,
    sku: '712RPF-ROD',
    stock: 18,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/712RPF-ROD.jpg'],
    specifications: {
      talla: 'Única (ajuste universal)',
      material: 'Kevlar + polietileno',
      protección: 'NIJ Level II',
      resistencia: 'Pruebas balísticas 9mm',
      modularidad: 'Compatibilidad con equipo táctico'
    },
    brand: 'SAS-TEC'
  },
  {
    id: '746RPF-ROD',
    name: 'Rodilleras All-Season',
    description: 'Protección adaptable a todas las condiciones climáticas',
    price: 139.99,
    sku: '746RPF-ROD',
    stock: 32,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/746RPF-ROD.jpg'],
    specifications: {
      talla: 'M-XXL',
      material: 'Cordura + membrana Windstopper',
      protección: 'Nivel CE 1',
      versatilidad: 'Forro térmico extraíble',
      impermeabilidad: '10,000mm columna agua'
    },
    brand: 'Richa'
  },
  {
    id: '775RPF-ROD',
    name: 'Rodilleras Race Titanium',
    description: 'Protección de competición con núcleo de titanio',
    price: 249.99,
    sku: '775RPF-ROD',
    stock: 15,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/775RPF-ROD.jpg'],
    specifications: {
      talla: 'S-L (circunferencia 35-45cm)',
      material: 'Titanio Grade 5 + D3O',
      protección: 'Nivel CE 2+',
      peso: '210g por rodillera',
      aerodinámica: 'Perfil racing'
    },
    brand: 'Dainese',
    featured: true
  },
  {
    id: '803RPF-ROD',
    name: 'Rodilleras Smart Impact',
    description: 'Protección inteligente con sensores de impacto',
    price: 179.99,
    sku: '803RPF-ROD',
    stock: 25,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/803RPF-ROD.jpg'],
    specifications: {
      talla: 'M-XL',
      material: 'Polímero inteligente',
      tecnología: 'Sensores de impacto Bluetooth',
      protección: 'Nivel CE 1',
      batería: 'USB-C (30h autonomía)'
    },
    brand: 'Spidi'
  },
  {
    id: '834RPF-ROD',
    name: 'Rodilleras Junior MX',
    description: 'Protección específica para jóvenes pilotos',
    price: 69.99,
    sku: '834RPF-ROD',
    stock: 40,
    categoryId: 3,
    subcategoryId: 305,
    images: ['/images/catalog/rodilleras/834RPF-ROD.jpg'],
    specifications: {
      talla: '8-16 años',
      material: 'TPU + espuma EVA',
      protección: 'Certificación CE',
      ajuste: 'Correas de velcro ajustables',
      color: 'Opciones juveniles'
    },
    brand: "O'Neal"
  },
  {
    id: '553RPF-IMP',
    name: 'Traje Impermeable Storm Pro',
    description: 'Traje completo de 2 piezas con tecnología DryTech 20K para condiciones extremas',
    price: 299.99,
    sku: '553RPF-IMP',
    stock: 25,
    categoryId: 3,
    subcategoryId: 306,
    images: ['/images/catalog/impermeables/553RPF-IMP.jpg'],
    specifications: {
      talla: 'S-XXL',
      material: 'Poliamida 70D con PU laminado',
      impermeabilidad: '20,000mm columna agua',
      transpirabilidad: '15,000g/m²/24h',
      sellado: 'Costuras termoselladas',
      reflexividad: 'Paneles 360° 3M Scotchlite'
    },
    brand: "Rev'it",
    featured: true,
    onSale: true,
    salePrice: 269.99
  },
  {
    id: '617RPF-IMP',
    name: 'Chaqueta RainSeal Urban',
    description: 'Chaqueta urbana plegable con protección total y diseño discreto',
    price: 149.99,
    sku: '617RPF-IMP',
    stock: 40,
    categoryId: 3,
    subcategoryId: 306,
    images: ['/images/catalog/impermeables/617RPF-IMP.jpg'],
    specifications: {
      talla: 'XS-XL',
      material: 'Poliester 50D con recubrimiento DWR',
      impermeabilidad: '10,000mm',
      empaquetado: 'Compacta a 15x10cm',
      bolsillos: '4 (2 internos sellados)',
      peso: '450g'
    },
    brand: 'Richa'
  },
  {
    id: '672RPF-IMP',
    name: 'Pantalones Monsoon Over',
    description: 'Pantalones sobrepuestos con cierre lateral completo y protección extra',
    price: 129.99,
    sku: '672RPF-IMP',
    stock: 35,
    categoryId: 3,
    subcategoryId: 306,
    images: ['/images/catalog/impermeables/672RPF-IMP.jpg'],
    specifications: {
      talla: '28-40 (waist)',
      material: 'Nylon 600D con PU',
      impermeabilidad: '15,000mm',
      cierre: 'Corredera lateral completa',
      protección: 'Refuerzo en rodillas/glúteos',
      ajuste: 'Elástico en cintura/botas'
    },
    brand: 'Furygan',
    featured: true
  },
  {
    id: '728RPF-IMP',
    name: 'Traje Adventure Gore-Tex',
    description: 'Traje de aventura con membrana Gore-Tex Pro 3L y protecciones integradas',
    price: 599.99,
    sku: '728RPF-IMP',
    stock: 15,
    categoryId: 3,
    subcategoryId: 306,
    images: ['/images/catalog/impermeables/728RPF-IMP.jpg'],
    specifications: {
      talla: 'M-XXXL',
      material: 'Gore-Tex Pro 3L + Cordura',
      impermeabilidad: 'Garantizada 28,000mm',
      ventilación: 'Cremalleras estratégicas',
      protecciones: 'Espalda/rodillas CE Nivel 1',
      conectividad: 'Compatibilidad con hidratación'
    },
    brand: 'Klim',
    onSale: false
  },
  {
    id: '539RPF-MIC',
    name: 'Visor Racing Pro Anti-Fog',
    description: 'Visor de competición con tratamiento anti-fog permanente y protección UV400',
    price: 89.99,
    sku: '539RPF-MIC',
    stock: 45,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/539RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'SHOEI X-SPR, GT-Air',
      material: 'Policarbonato óptico 2.5mm',
      tratamiento: 'Anti-fog NanoTech',
      protección: 'UV400 100%',
      tintado: 'Transparente/Espejo/Irrompible'
    },
    brand: 'SHOEI',
    featured: true,
    onSale: true,
    salePrice: 80.99
  },
  {
    id: '578RPF-MIC',
    name: 'Visor Fotocromático Adaptativo',
    description: 'Visor que ajusta automáticamente su tonalidad según la luz solar',
    price: 149.99,
    sku: '578RPF-MIC',
    stock: 30,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/578RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'NOLAN N100, X-Lite',
      rango_adaptación: 'Claro (15%) a Oscuro (80%)',
      tiempo_transición: '30 segundos',
      protección: 'UV400 + IR',
      material: 'Policarbonato con cristales líquidos'
    },
    brand: 'NOLAN'
  },
  {
    id: '614RPF-MIC',
    name: 'Visor Panorámico Curvo',
    description: 'Diseño curvado para máximo campo visual sin distorsiones',
    price: 79.99,
    sku: '614RPF-MIC',
    stock: 60,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/614RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'HJC RPHA, F70',
      ángulo_vision: '210° horizontales',
      material: 'Policarbonato óptico 2.2mm',
      'anti-scratch': 'Capa exterior endurecida',
      sellado: 'Junta tórica antivaho'
    },
    brand: 'HJC',
    featured: true
  },
  {
    id: '647RPF-MIC',
    name: 'Visor Espejado Gold',
    description: 'Revestimiento espejado dorado para alta reflectividad solar',
    price: 69.99,
    sku: '647RPF-MIC',
    stock: 55,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/647RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'AGV Pista, K1',
      reflectividad: '95% luz visible',
      material: 'Policarbonato 2.3mm',
      capas: '5 capas de revestimiento',
      resistencia: 'Anti-rayaduras 3H'
    },
    brand: 'AGV'
  },
  {
    id: '692RPF-MIC',
    name: 'Visor Pinlock 120',
    description: 'Incluye lente interna Pinlock para máxima anti-empañamiento',
    price: 99.99,
    sku: '692RPF-MIC',
    stock: 40,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/692RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'Arai RX-7, Quantum',
      sistema: 'Pinlock 120 (incluido)',
      sellado: 'Doble junta antivaho',
      material: 'Policarbonato óptico 2.4mm',
      garantía: 'Anti-fog permanente'
    },
    brand: 'Arai',
    onSale: true,
    salePrice: 89.99
  },
  {
    id: '725RPF-MIC',
    name: 'Visor Amarillo Night Vision',
    description: 'Tinte amarillo que mejora el contraste en condiciones de poca luz',
    price: 59.99,
    sku: '725RPF-MIC',
    stock: 70,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/725RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'Universal (recortable)',
      beneficio: 'Aumenta contraste 30%',
      material: 'Policarbonato 2.0mm',
      uso_recomendado: 'Noche/lluvia/niebla',
      transmisión_luz: '85% luz visible'
    },
    brand: 'Bell'
  },
  {
    id: '763RPF-MIC',
    name: 'Visor Racing Dark Smoke',
    description: 'Tinte oscuro para máxima protección solar sin distorsión óptica',
    price: 75.99,
    sku: '763RPF-MIC',
    stock: 50,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/763RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'SHARK Race-R, Spartan',
      transmisión_luz: '15% (CAT-3)',
      material: 'Policarbonato 2.5mm',
      protección: 'UV400 + IR',
      resistencia: 'Anti-impacto 1.8J'
    },
    brand: 'SHARK',
    featured: true
  },
  {
    id: '798RPF-MIC',
    name: 'Visor Clear Anti-Scratch',
    description: 'Visor transparente con tratamiento ultra resistente a rayaduras',
    price: 49.99,
    sku: '798RPF-MIC',
    stock: 85,
    categoryId: 3,
    subcategoryId: 307,
    images: ['/images/catalog/micas/798RPF-MIC.jpg'],
    specifications: {
      compatibilidad: 'Universal (recortable)',
      tratamiento: 'DuraVision 4X',
      dureza: '9H (equivalente)',
      material: 'Policarbonato 2.1mm',
      garantía: '2 años anti-rayas'
    },
    brand: 'Motocard'
  },
  {
    id: '545RPF-ACA',
    name: 'Kit Orejas de Gato LED para Casco - 2 Colores',
    description:
      'Accesorio decorativo con orejas de gato iluminadas por LED, ideal para personalizar tu casco. Incluye 2 colores intercambiables (blanco cálido y azul eléctrico) con control remoto para efectos de parpadeo.',
    price: 24.99,
    sku: '545RPF-ACA',
    stock: 65,
    categoryId: 3,
    subcategoryId: 308,
    images: ['/images/catalog/accesorios-casco/545RPF-ACA.jpg'],
    specifications: {
      material: 'Silicona suave + ABS',
      colores: 'Blanco/azul intercambiables',
      iluminación: 'LED (3 modos: fijo/parpadeo/ola)',
      alimentación: 'Batería CR2032 (incluida)',
      montaje: 'Adhesivo 3M resistente'
    },
    brand: 'MotoGadgets',
    featured: true,
    onSale: true,
    salePrice: 22.49
  },
  {
    id: '611RPF-ACA',
    name: 'Alas de Murciélago Retráctiles para Casco',
    description:
      'Alas articuladas con mecanismo de apertura automática (60cm envergadura). Diseño realista en material flexible que se pliega al guardar. Perfectas para eventos temáticos o conciertos.',
    price: 39.99,
    sku: '611RPF-ACA',
    stock: 40,
    categoryId: 3,
    subcategoryId: 308,
    images: ['/images/catalog/accesorios-casco/611RPF-ACA.jpg'],
    specifications: {
      material: 'Tela elástica + varillas de fibra',
      mecanismo: 'Resorte de acero inoxidable',
      peso: '180g (sin afectar balance)',
      control: 'Activación por movimiento',
      resistencia: 'Hasta 80km/h'
    },
    brand: 'CosplayRider',
    featured: true
  },
  {
    id: '674RPF-ACA',
    name: 'Cuernos Demoníacos LED Azules para Casco',
    description:
      'Par de cuernos luminiscentes con efecto neón azul (18cm altura). Base moldeable para ajuste perfecto a cualquier tipo de casco. Incluye control de brillo remoto.',
    price: 29.99,
    sku: '674RPF-ACA',
    stock: 50,
    categoryId: 3,
    subcategoryId: 308,
    images: ['/images/catalog/accesorios-casco/674RPF-ACA.jpg'],
    specifications: {
      material: 'PVC flexible + luces EL',
      longitud: '18cm (ajustable)',
      modos_luz: '5 efectos programables',
      duración: '20 horas continuas',
      impermeabilidad: 'IP54'
    },
    brand: 'NightRider',
    onSale: false
  },
  {
    id: '699RPF-ACA',
    name: 'Orejas de Gato Premium para Casco - Versión Lisa',
    description:
      'Orejas aerodinámicas de diseño minimalista en silicona de grado médico. Perfil bajo (5cm) que mantiene estética sin comprometer seguridad. Paquete con 3 tonos neutros.',
    price: 19.99,
    sku: '699RPF-ACA',
    stock: 80,
    categoryId: 3,
    subcategoryId: 308,
    images: ['/images/catalog/accesorios-casco/699RPF-ACA.jpg', '/images/catalog/accesorios-casco/699RPF-ACA-2.jpg'],
    specifications: {
      material: 'Silicona platino (hipoalergénica)',
      colores: 'Negro/gris/beige mate',
      perfil: '5cm (bajo impacto aerodinámico)',
      montaje: 'Base magnética removible',
      resistencia: 'Estable a 120km/h'
    },
    brand: 'MotoStyle',
    onSale: true,
    salePrice: 17.99
  }
]

// Combinar todas las categorías
export const products: Product[] = [...refacciones, ...accesorios, ...piloto]
