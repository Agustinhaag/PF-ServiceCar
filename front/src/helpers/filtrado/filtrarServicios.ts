import { IService, ISucursales } from "@/helpers/types/types";

export const filtrarServiciosPorSucursal = (
<<<<<<< HEAD
  servicios: IService[] | undefined,
  sucursalSeleccionada: string,
=======
  servicios: IService[],
  sucursalesSeleccionadas: string[], 
>>>>>>> ff801641f5515df9f74b6bd8b4f79a20970c5eaa
  palabraClave: string,
  vehiculosSeleccionados: string[]
): IService[] | undefined => {
  const palabraClaveNormalizada = palabraClave.toLowerCase();

<<<<<<< HEAD
  return servicios && servicios.filter(servicio => {
   
    const esSucursalSeleccionada = sucursalSeleccionada === "" || 
      servicio.sucursales.includes(sucursalSeleccionada);
=======
  return servicios.filter((servicio) => {
    const tieneTodasLasSucursales = sucursalesSeleccionadas.length === 0 || 
      sucursalesSeleccionadas.every((sucursal) =>
        servicio.sucursales.includes(sucursal)
      );
>>>>>>> ff801641f5515df9f74b6bd8b4f79a20970c5eaa

    const esVehiculoSeleccionado =
      vehiculosSeleccionados.length === 0 ||
      vehiculosSeleccionados.includes(servicio.vehiculo);

    const coincideBusqueda =
      servicio.type.toLowerCase().includes(palabraClaveNormalizada) ||
      servicio.description.toLowerCase().includes(palabraClaveNormalizada) ||
      servicio.vehiculo.toLowerCase().includes(palabraClaveNormalizada);

    return tieneTodasLasSucursales && esVehiculoSeleccionado && coincideBusqueda;
  });
};

