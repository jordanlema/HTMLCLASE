// main.ts
// 1. Tipos básicos
var nombreProducto = "Camiseta Oversize";
var precio = 29.99;
var disponible = true;
var stock = 150;
var categoria = "Ropa Casual";
// 3. Clases
var ClienteTienda = /** @class */ (function () {
    function ClienteTienda(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
    return ClienteTienda;
}());
var ProductoRopa = /** @class */ (function () {
    function ProductoRopa(id, nombre, precio, stock, talla, color) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.talla = talla;
        this.color = color;
    }
    ProductoRopa.prototype.validarStock = function (cantidad) {
        return this.stock >= cantidad;
    };
    return ProductoRopa;
}());
var PedidoCliente = /** @class */ (function () {
    function PedidoCliente(id, cliente, productos, estado) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos;
        this.estado = estado;
    }
    PedidoCliente.prototype.totalPedido = function () {
        return this.productos.reduce(function (total, p) { return total + p.precio; }, 0);
    };
    return PedidoCliente;
}());
// 4. Arreglos tipados
var clientes = [];
var productos = [];
var pedidos = [];
// Relleno de datos simulados
for (var i = 1; i <= 10; i++) {
    clientes.push(new ClienteTienda(i, "Cliente ".concat(i), "cliente".concat(i, "@tienda.com")));
    productos.push(new ProductoRopa(i, "Prenda ".concat(i), 20 + i, 10 + i, "M", i % 2 === 0 ? "Negro" : "Blanco"));
}
// 5. Funciones tipadas
function mostrarProductos(productos) {
    console.log("📦 Productos en tienda:");
    productos.forEach(function (p) { return console.log("".concat(p.nombre, " - $").concat(p.precio)); });
}
function contarProductosDisponibles(productos) {
    return productos.filter(function (p) { return p.stock > 0; }).length;
}
function insertarProducto(producto) {
    productos.push(producto);
}
function eliminarProducto(id) {
    var index = productos.findIndex(function (p) { return p.id === id; });
    if (index >= 0)
        productos.splice(index, 1);
}
// 6. Tipos especiales ya aplicados: readonly, optional (?), union (estado)
// 7. map()
var nombresMayusculas = productos.map(function (p) { return p.nombre.toUpperCase(); });
console.log("🧢 Nombres en mayúsculas:", nombresMayusculas);
// 8. filter()
var productosDisponibles = productos.filter(function (p) { return p.stock > 15; });
console.log("👕 Productos con buen stock:", productosDisponibles);
// 9. reduce()
var sumaTotalPrecios = productos.reduce(function (acc, p) { return acc + p.precio; }, 0);
console.log("💰 Suma total de precios:", sumaTotalPrecios);
// 10. Relaciones entre objetos
var pedido1 = new PedidoCliente(1, clientes[0], [productos[0], productos[1]], "pendiente");
pedidos.push(pedido1);
// 11. Operación de negocio
function resumenPedido(pedido) {
    console.log("\uD83D\uDCC4 Pedido #".concat(pedido.id));
    console.log("Cliente: ".concat(pedido.cliente.nombre));
    console.log("Productos:");
    pedido.productos.forEach(function (p) { return console.log("- ".concat(p.nombre, " - $").concat(p.precio)); });
}
// 12. Imprimir estructuras anidadas
function mostrarPedidos(pedidos) {
    pedidos.forEach(function (p) {
        console.log("📦====================");
        resumenPedido(p);
        console.log("Estado: ".concat(p.estado));
    });
}
// Ejecutamos funciones para probar
mostrarProductos(productos);
console.log("Productos disponibles: ".concat(contarProductosDisponibles(productos)));
mostrarPedidos(pedidos);
