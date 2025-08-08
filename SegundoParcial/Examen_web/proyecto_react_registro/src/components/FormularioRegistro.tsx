import { useState, useContext, type FormEvent, type ChangeEvent } from 'react';
import InscripcionContext from '../context/InscripcionContext';
import type { Participante } from '../models/inscripciones.model';

function FormularioRegistro() {
  const context = useContext(InscripcionContext);
  if (!context) {
    throw new Error('FormularioRegistro debe estar dentro de InscripcionProvider');
  }
  const { dispatch } = context;

  const [formData, setFormData] = useState<Participante>({
    id: '',
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    talla_camiseta: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_PARTICIPANTE_INFO', payload: { ...formData, id: Date.now().toString() } });
    alert('Información del participante guardada. Continuar a la siguiente pantalla.');
  };

  return (
    <div className="form-card">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="talla_camiseta">Talla de camiseta:</label>
          <select id="talla_camiseta" name="talla_camiseta" value={formData.talla_camiseta} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Registrar</button>
      </form>
    </div>
  );
}

export default FormularioRegistro;