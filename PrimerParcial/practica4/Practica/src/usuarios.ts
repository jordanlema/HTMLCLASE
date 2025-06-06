
export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

export let usuarios: Usuario[] = [
  { id: 1, nombre: "Juan Pérez", correo: "juan@correo.com" },
  { id: 2, nombre: "Ana Gómez", correo: "ana@correo.com" },
  { id: 3, nombre: "Carlos Ruiz", correo: "carlos@correo.com" },
];

export function renderizarUsuarios(container: HTMLElement) {
  container.innerHTML = "<h2 class='text-xl font-bold mb-4'>Usuarios</h2>";

  usuarios.forEach(usuario => {
    const card = document.createElement('div');
    card.className = "bg-white shadow p-4 rounded mb-4";

    const nombre = document.createElement('h3');
    nombre.textContent = usuario.nombre;

    const correo = document.createElement('p');
    correo.textContent = usuario.correo;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "bg-red-500 text-white px-3 py-1 rounded";
    btnEliminar.onclick = () => {
      usuarios = usuarios.filter(u => u.id !== usuario.id);
      renderizarUsuarios(container);
    };

    card.append(nombre, correo, btnEliminar);
    container.appendChild(card);
  });
}

export function crearFormularioUsuarios(container: HTMLElement) {
  const form = document.createElement('form');
  form.className = "bg-white shadow p-4 rounded max-w-md mx-auto flex flex-col gap-4";

  const inputNombre = document.createElement('input');
  inputNombre.placeholder = "Nombre";
  inputNombre.className = "border p-2 rounded";

  const inputCorreo = document.createElement('input');
  inputCorreo.placeholder = "Correo electrónico";
  inputCorreo.className = "border p-2 rounded";

  const errorMsg = document.createElement('p');
  errorMsg.className = "text-red-500 text-sm";

  const successMsg = document.createElement('p');
  successMsg.className = "text-green-500 text-sm";

  const btn = document.createElement('button');
  btn.textContent = "Registrar Usuario";
  btn.type = "submit";
  btn.className = "bg-blue-600 text-white px-4 py-2 rounded";

  form.append(inputNombre, inputCorreo, errorMsg, successMsg, btn);
  container.appendChild(form);

  form.onsubmit = (e) => {
    e.preventDefault();
    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value.trim();

    // Validación básica
    if (!nombre || !correo.includes("@")) {
      errorMsg.textContent = "Nombre obligatorio y correo válido requerido.";
      successMsg.textContent = "";
      return;
    }

    // Agregar usuario
    const nuevoUsuario: Usuario = {
      id: Date.now(),
      nombre,
      correo
    };
    usuarios.push(nuevoUsuario);
    renderizarUsuarios(container); // Re-renderiza
    inputNombre.value = "";
    inputCorreo.value = "";
    errorMsg.textContent = "";
    successMsg.textContent = "Usuario registrado correctamente.";
  };
}

