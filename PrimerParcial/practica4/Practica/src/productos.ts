
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

export let productos: Producto[] = [
  { id: 1, nombre: "Laptop Gamer", precio: 999.99, descripcion: "GPU dedicada, 16GB RAM, SSD 512GB" },
  { id: 2, nombre: "Mouse Inalámbrico", precio: 25.50, descripcion: "Ergonómico con batería recargable" },
  { id: 3, nombre: "Monitor 24 pulgadas", precio: 189.99, descripcion: "Full HD con panel IPS" },
];

export function renderizarProductos(container: HTMLElement) {
  container.innerHTML = "<h2 class='text-xl font-bold mb-4'>Productos</h2>";

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = "bg-white shadow p-4 rounded mb-4";

    const titulo = document.createElement('h3');
    titulo.textContent = producto.nombre;
    titulo.className = "font-bold";

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio}`;

    const desc = document.createElement('p');
    desc.textContent = producto.descripcion;

    const btnEditar = document.createElement('button');
    btnEditar.textContent = "Editar";
    btnEditar.className = "bg-yellow-400 text-white px-3 py-1 rounded mr-2";
    btnEditar.onclick = () => {
      const nuevoNombre = prompt("Nuevo nombre:", producto.nombre);
      if (nuevoNombre) {
        producto.nombre = nuevoNombre;
        renderizarProductos(container);
      }
    };

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "bg-red-500 text-white px-3 py-1 rounded";
    btnEliminar.onclick = () => {
      productos = productos.filter(p => p.id !== producto.id);
      renderizarProductos(container);
    };

    card.append(titulo, precio, desc, btnEditar, btnEliminar);
    container.appendChild(card);
  });
}

export function crearFormularioProductos(container: HTMLElement) {
  const form = document.createElement('form');
  form.className = "bg-white shadow p-4 rounded max-w-md mx-auto flex flex-col gap-4";

  const inputNombre = document.createElement('input');
  inputNombre.placeholder = "Nombre del producto";
  inputNombre.className = "border p-2 rounded";

  const inputPrecio = document.createElement('input');
  inputPrecio.placeholder = "Precio";
  inputPrecio.type = "number";
  inputPrecio.className = "border p-2 rounded";

  const inputDescripcion = document.createElement('input');
  inputDescripcion.placeholder = "Descripción";
  inputDescripcion.className = "border p-2 rounded";

  const errorMsg = document.createElement('p');
  errorMsg.className = "text-red-500 text-sm";

  const successMsg = document.createElement('p');
  successMsg.className = "text-green-500 text-sm";

  const btn = document.createElement('button');
  btn.textContent = "Agregar Producto";
  btn.type = "submit";
  btn.className = "bg-blue-600 text-white px-4 py-2 rounded";

  form.append(inputNombre, inputPrecio, inputDescripcion, errorMsg, successMsg, btn);
  container.appendChild(form);

  form.onsubmit = (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const precio = parseFloat(inputPrecio.value.trim());
    const descripcion = inputDescripcion.value.trim();

    if (!nombre || isNaN(precio) || !descripcion) {
      errorMsg.textContent = "Todos los campos son obligatorios y el precio debe ser un número.";
      successMsg.textContent = "";
      return;
    }

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre,
      precio,
      descripcion,
    };

    productos.push(nuevoProducto);
    renderizarProductos(container);
    inputNombre.value = "";
    inputPrecio.value = "";
    inputDescripcion.value = "";
    errorMsg.textContent = "";
    successMsg.textContent = "Producto agregado correctamente.";
  };
}
