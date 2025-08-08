<template>
  <div class="form-card">
    <h2>Nueva Carrera</h2>
    <form @submit.prevent="crearCarrera">
      <div class="form-field">
        <label for="tipo_carrera">Tipo de carrera:</label>
        <select id="tipo_carrera" v-model="carrera.tipo_de_carrera" required>
          <option value="">Seleccione una distancia</option>
          <option value="5k">5k</option>
          <option value="10k">10k</option>
          <option value="21k">21k (Media Maratón)</option>
          <option value="42k">42k (Maratón)</option>
        </select>
      </div>
      <div class="form-field">
        <label for="fecha_evento">Fecha del evento:</label>
        <input type="date" id="fecha_evento" v-model="carrera.fecha" required />
      </div>
      <button type="submit" class="submit-button">Crear Carrera</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useInscripcionesStore } from '../store/inscripciones';
import type { Carrera } from '../models/inscripciones.model';

const store = useInscripcionesStore();

const carrera = ref<Carrera>({
  id: '',
  nombre: '',
  tipo_de_carrera: '',
  fecha: ''
});

const crearCarrera = () => {
  if (carrera.value.tipo_de_carrera && carrera.value.fecha) {
    const nuevaCarrera: Carrera = {
      ...carrera.value,
      id: Date.now().toString(),
      nombre: `Carrera ${carrera.value.tipo_de_carrera}`
    };
    store.crearCarrera(nuevaCarrera);
    alert(`Carrera ${nuevaCarrera.tipo_de_carrera} creada con éxito.`);
    carrera.value.tipo_de_carrera = '';
    carrera.value.fecha = '';
  } else {
    alert('Por favor, completa todos los campos.');
  }
};
</script>

<style scoped>
</style>