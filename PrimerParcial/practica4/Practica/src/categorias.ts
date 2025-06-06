export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

export let categorias: Categoria[] = [
  { id: 1, nombre: "Electrónica", descripcion: "Tecnología y dispositivos" },
  { id: 2, nombre: "Ropa", descripcion: "Vestimenta y accesorios" },
  { id: 3, nombre: "Libros", descripcion: "Educativos y de entretenimiento" },
];

export function renderizarCategorias(container: HTMLElement) {
  container.innerHTML = "<h2 class='text-xl font-bold mb-4'>Categorías</h2>";

  categorias.forEach(categoria => {
    const card = document.createElement('div');
    card.className = "bg-white shadow p-4 rounded mb-4";

    const nombre = document.createElement('h3');
    nombre.textContent = categoria.nombre;

    const desc = document.createElement('p');
    desc.textContent = categoria.descripcion;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "bg-red-500 text-white px-3 py-1 rounded";
    btnEliminar.onclick = () => {
      categorias = categorias.filter(c => c.id !== categoria.id);
      renderizarCategorias(container);
    };

    card.append(nombre, desc, btnEliminar);
    container.appendChild(card);
  });
}
