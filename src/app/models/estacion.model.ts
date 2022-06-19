export interface Estacion{
  ciudad: string;
  departamento: string;
  estado: string;
  latitud: number;
  longitud: number;
  nivelAlerta: number,
  nivelPrecaucion: number,
  nombre: string;
  topic: string;
  enabled:boolean;
  uid: string;
}
