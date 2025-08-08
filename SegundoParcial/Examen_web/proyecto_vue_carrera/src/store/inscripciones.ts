import { defineStore } from 'pinia';
import type { Carrera, Inscripcion } from '../models/inscripciones.model';
import data from '../data/inscripciones_db.json';

interface InscripcionesState {
  carreras: Carrera[];
  inscripciones: Inscripcion[];
}

export const useInscripcionesStore = defineStore('inscripciones', {
  state: (): InscripcionesState => ({
    carreras: data.carreras,
    inscripciones: data.inscripciones
  }),
  actions: {
    crearCarrera(carrera: Carrera) {
      this.carreras.push(carrera);
    }
  }
});