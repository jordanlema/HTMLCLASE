import { Injectable } from '@angular/core';
import type { Inscripcion } from '../models/inscripciones.model';
import data from '../data/inscripciones_db.json';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private inscripciones: Inscripcion[] = data.inscripciones;

  constructor() {}

  agregarInscripcion(inscripcion: Inscripcion): void {
    this.inscripciones.push(inscripcion);
  }

  obtenerInscripcion(id: string): Inscripcion | undefined {
    return this.inscripciones.find(i => i.id === id);
  }
}