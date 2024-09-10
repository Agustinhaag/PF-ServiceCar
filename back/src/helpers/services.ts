import { Vehiculos } from "../enum/vehiculos.enum";

export const predefinedServices = [
  {
    type: 'Cambio de Aceite - Auto',
    description: 'Cambio completo de aceite y filtro.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/Aceite_asog8l.jpg',
    price: 50,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Cambio de Aceite - Moto',
    description: 'Cambio completo de aceite y filtro.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/Aceite_asog8l.jpg',
    price: 50,
    vehiculo: Vehiculos.Moto,
    sucursales: ["Córdoba Centro", "Mendoza Oeste"],
  },
  {
    type: 'Cambio de Aceite - Camion',
    description: 'Cambio completo de aceite y filtro.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/Aceite_asog8l.jpg',
    price: 50,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Rotación de Neumáticos - Auto',
    description: 'Rotación de neumáticos para asegurar un desgaste uniforme.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/neumaticos_uk2sg7.webp',
    price: 30,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Rotación de Neumáticos - Camion',
    description: 'Rotación de neumáticos para asegurar un desgaste uniforme.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/neumaticos_uk2sg7.webp',
    price: 30,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Inspección de Frenos - Auto',
    description: 'Inspección y mantenimiento exhaustivo de frenos.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/frenos_nbmlix.jpg',
    price: 70,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Inspección de Frenos - Camion',
    description: 'Inspección y mantenimiento exhaustivo de frenos.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/frenos_nbmlix.jpg',
    price: 70,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Cambio de Bujías - Auto',
    description: 'Sustitución de bujías para un encendido más eficiente.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/bujias_vu96su.jpg',
    price: 40,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte"],
  },
  {
    type: 'Cambio de Bujías - Camion',
    description: 'Sustitución de bujías para un encendido más eficiente.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/bujias_vu96su.jpg',
    price: 40,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte"],
  },
  {
    type: 'Alineación y Balanceo - Auto',
    description: 'Ajuste de alineación y balanceo para mejorar la estabilidad del vehículo.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/alineacion_kjz1dt.jpg',
    price: 60,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte"],
  },
  {
    type: 'Alineación y Balanceo - Camion',
    description: 'Ajuste de alineación y balanceo para mejorar la estabilidad del vehículo.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/alineacion_kjz1dt.jpg',
    price: 60,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Cambio de Filtro de Aire - Auto',
    description: 'Reemplazo del filtro de aire para un mejor rendimiento del motor.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/filtro_k6bvai.jpg',
    price: 25,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Mendoza Oeste"],
  },
  {
    type: 'Cambio de Filtro de Aire - Camion',
    description: 'Reemplazo del filtro de aire para un mejor rendimiento del motor.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721167/filtro_k6bvai.jpg',
    price: 25,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Revisión de Suspensión - Auto',
    description: 'Inspección completa del sistema de suspensión para asegurar una conducción suave.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/suspension_rdljfr.jpg',
    price: 80,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte"],
  },
  {
    type: 'Revisión de Suspensión - Camion',
    description: 'Inspección completa del sistema de suspensión para asegurar una conducción suave.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/suspension_rdljfr.jpg',
    price: 80,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Cambio de Batería - Auto',
    description: 'Sustitución de batería para garantizar el correcto funcionamiento eléctrico del vehículo.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/bateria_i8xblb.jpg',
    price: 100,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte"],
  },
  {
    type: 'Cambio de Batería - Camion',
    description: 'Sustitución de batería para garantizar el correcto funcionamiento eléctrico del vehículo.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/bateria_i8xblb.jpg',
    price: 100,
    vehiculo: Vehiculos.Camion,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte", "Mendoza Oeste"],
  },
  {
    type: 'Limpieza de Inyectores - Auto',
    description: 'Limpieza profesional de inyectores para mejorar la eficiencia del combustible.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/inyectores_ndmmca.jpg',
    price: 60,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Mendoza Oeste"],
  },
  {
    type: 'Inspección Completa - Auto',
    description: 'Revisión exhaustiva de todos los sistemas del vehículo.',
    image: 'https://res.cloudinary.com/dwyboceie/image/upload/v1724721166/inspeccion_guh8ol.jpg',
    price: 200,
    vehiculo: Vehiculos.Auto,
    sucursales: ["Córdoba Centro", "Buenos Aires Norte"],
  },
];
