// Examen_Desarrollo_Web/dominio_modelos/inscripciones.model.ts

export interface Carrera {
  id: string;
  nombre: string;
  tipo_de_carrera: string;
  fecha: string;
}

export interface Participante {
  id: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  talla_camiseta: string;
}

export interface Pago {
  metodo_pago: string;
  total: number;
}

export interface Inscripcion {
  id: string;
  id_carrera: string;
  participante: Participante;
  pago: Pago;
}