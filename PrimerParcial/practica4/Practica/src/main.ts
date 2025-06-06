import './styles.css';
import { renderizarProductos, crearFormularioProductos } from './productos';
import { renderizarUsuarios, crearFormularioUsuarios } from './usuarios';
import { renderizarCategorias } from './categorias';


// Contenedor principal
const app = document.querySelector<HTMLDivElement>('#app')!;
app.className = "p-4";

// Secciones
const contenedorProductos = document.createElement('section');
const contenedorUsuarios = document.createElement('section');
const contenedorCategorias = document.createElement('section');

contenedorProductos.className = "mt-10";
contenedorUsuarios.className = "mt-10";
contenedorCategorias.className = "mt-10";

app.appendChild(contenedorProductos);
app.appendChild(contenedorUsuarios);
app.appendChild(contenedorCategorias);

// Formulario para registrar usuarios
crearFormularioUsuarios(contenedorUsuarios);
crearFormularioProductos(contenedorProductos);

// Renderizado dinámico
renderizarProductos(contenedorProductos);
renderizarUsuarios(contenedorUsuarios);
renderizarCategorias(contenedorCategorias);
