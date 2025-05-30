// ====================
// 1. Tipos básicos
// ====================
let nombreProducto: string = "Camiseta Oversize";
let precio: number = 29.99;
let disponible: boolean = true;
let stock: number = 150;
let categoria: string = "Ropa Casual";

// ====================
// 2. Interfaces
// ====================
interface Cliente {
  readonly id: number;
  nombre: string;
  email?: string;
}

interface Producto {
  readonly id: number;
  nombre: string;
  precio: number;
  stock: number;
  talla?: string;
  color?: string;
}

interface Pedido {
  id: number;
  cliente: Cliente;
  productos: Producto[];
  estado: "pendiente" | "enviado" | "entregado";
}

// ====================
// 3. Clases
// ====================
class ClienteTienda implements Cliente {
  constructor(
    public readonly id: number,
    public nombre: string,
    public email?: string
  ) {}
}

class ProductoRopa implements Producto {
  constructor(
    public readonly id: number,
    public nombre: string,
    public precio: number,
    public stock: number,
    public talla?: string,
    public color?: string
  ) {}

  validarStock(cantidad: number): boolean {
    return this.stock >= cantidad;
  }
}

class PedidoCliente implements Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public productos: Producto[],
    public estado: "pendiente" | "enviado" | "entregado"
  ) {}

  totalPedido(): number {
    return this.productos.reduce((total, p) => total + p.precio, 0);
  }
}

// ====================
// 4. Arreglos tipados
// ====================
let clientes: Cliente[] = [];
let productos: Producto[] = [];
let pedidos: Pedido[] = [];

// ====================
// 5. Datos simulados
// ====================
for (let i = 1; i <= 10; i++) {
  clientes.push(new ClienteTienda(i, `Cliente ${i}`, `cliente${i}@tienda.com`));
  productos.push(
    new ProductoRopa(i, `Prenda ${i}`, 20 + i, 10 + i, "M", i % 2 === 0 ? "Negro" : "Blanco")
  );
}

// ====================
// 6. Funciones tipadas
// ====================
function mostrarProductos(productos: Producto[]): void {
  console.log("📦 Productos en tienda:");
  productos.forEach(p => console.log(`${p.nombre} - $${p.precio}`));
}

function contarProductosDisponibles(productos: Producto[]): number {
  return productos.filter(p => p.stock > 0).length;
}

function insertarProducto(producto: Producto): void {
  productos.push(producto);
}

function eliminarProducto(id: number): void {
  const index = productos.findIndex(p => p.id === id);
  if (index >= 0) productos.splice(index, 1);
}

// ====================
// 7. map()
// ====================
const nombresMayusculas = productos.map(p => p.nombre.toUpperCase());
console.log("🧢 Nombres en mayúsculas:", nombresMayusculas);

// ====================
// 8. filter()
// ====================
const productosDisponibles = productos.filter(p => p.stock > 15);
console.log("👕 Productos con buen stock:", productosDisponibles);

// ====================
// 9. reduce()
// ====================
const sumaTotalPrecios = productos.reduce((acc, p) => acc + p.precio, 0);
console.log("💰 Suma total de precios:", sumaTotalPrecios);

// ====================
// 10. Relaciones entre objetos
// ====================
const pedido1 = new PedidoCliente(1, clientes[0], [productos[0], productos[1]], "pendiente");
pedidos.push(pedido1);

// ====================
// 11. Operación de negocio: resumen de pedido
// ====================
function resumenPedido(pedido: Pedido): void {
  console.log(`📄 Pedido #${pedido.id}`);
  console.log(`Cliente: ${pedido.cliente.nombre}`);
  console.log("Productos:");
  pedido.productos.forEach(p => console.log(`- ${p.nombre} - $${p.precio}`));
}

// ====================
// 12. Imprimir estructuras anidadas
// ====================
function mostrarPedidos(pedidos: Pedido[]): void {
  pedidos.forEach(p => {
    console.log("📦====================");
    resumenPedido(p);
    console.log(`Estado: ${p.estado}`);
  });
}

// ====================
// Ejecutamos funciones para probar todo
// ====================
mostrarProductos(productos);
console.log(`Productos disponibles: ${contarProductosDisponibles(productos)}`);
mostrarPedidos(pedidos);
