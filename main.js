import Direccion from "./direccion.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Pedido from "./pedido.js"
import Cliente from "./cliente.js"
import Restaurante from "./restaurante.js"
import ClienteFrecuente from "./clienteFrecuente.js"


var datosPedido1 = new Pedido(new Fecha(27,2,2020), new Tiempo(6,34,"pm"), new Cliente("Ana Georgina Landín", new Direccion("Manuel Acuña", 385, 0, "Lomas", 28000, "Colima", "Colima"), 3123045861))
var datosClienteF1 = {nombre: "Ana Georgina Landín", direccion: new Direccion("manuel acuña", 385, 0, "Lomas de circunvalación", 28010, "colima", "colima"), telefono: 3126023, numero: 3, fecha: new Fecha(11,2,2020)}
var datosCliente = {nombre: "Ana Landín", direccion: new Direccion("Ignacio Salndoval", 130, 0, "Centro", 28000, "Colima", "Colima"), telefono: 31358605}

class Main {
    constructor(){
        this.pedido = new Pedido(datosPedido1)
        this.restaurante = new Restaurante("Kukara Sushi Deli", 3126023, new Direccion("Ignacio Sandoval", 1130, 0, "Lomas", 28000, "Colima", "Colima"))
    }

    pruebaTiempo(){
        let hora = new Tiempo(6, 24, "pm")
        console.log(hora.getFormato12())
        console.log(hora.getFormato24())
    }

    pruebaFecha () {
        let fecha = new Fecha(15,2,2021)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    pruebaDireccion () {
        let direcc1 = new Direccion("Manuel Acuña", 352, 0, "Lomas", 28000, "Colima", "Colima")
        let direcc2 = new Direccion("Ignacio Sandoval", 665, 9, "Lomas", 28000, "Colima", "Colima")
        console.log(direcc1.getFormatoCorto())
        console.log(direcc1.getFormatoExtend())
        console.log(direcc2.getFormatoCorto())
        console.log(direcc2.getFormatoExtend())
    }

    pruebaPrecio() {
        let precio = new Precio(1334.50)
        console.log(precio.getPrecio())
    }

    pruebaProducto() {
        let product = new Producto("Hamburguesa con papas,", new Precio(85.60))
        console.log(product.getDescripcion())
    }

    pruebaElementoPedido() {
        let pedido1 = new ElementoPedido(new Producto("Hamburguesa con papas", new Precio (85.6)), 2)
        console.log(pedido1.getDescripcion())
    }

    pruebaPedido(){
        let elemento1 = new ElementoPedido(new Producto("Hamburguesa con papas", new Precio (85.6)), 2)
        this.pedido.agregarElemento(elemento1)
        let elemento2 = new ElementoPedido(new Producto("Hamburguesa con queso y papas", new Precio (95.8)), 2)
        this.pedido.agregarElemento(elemento2)
        this.pedido.listarElementos()
    }

    pruebaCliente(){
        let cliente = new Cliente(datosCliente)
        console.log(cliente.getPerfil())
    }

    pruebaClienteFrecuente(){
        let clienteF1 = new ClienteFrecuente(datosClienteF1)
        console.log(clienteF1.getPerfil())
    }

    pruebaRestaurante(){
        let prod1 = new Producto("Huevos revueltos", new Precio(45.90))
        let prod2 = new Producto("Chilaquiles verdes", new Precio(90.5))
        this.restaurante.registrarProducto(prod1)
        this.restaurante.registrarProducto(prod2)
        this.restaurante.listarProductos()
        let pedido = new Pedido(new Fecha(27,2,2020), new Tiempo(11,48,"am"), new Cliente("Cristina López", new Direccion("Ignacio Zaragoza", 39, 0, "Centro", 28000, "Colima", "Colima"), 3123013359))
        let elem1 = new ElementoPedido(new Producto("Sushi Loko", new Precio(110)), 8)
        let elem2 = new ElementoPedido(new Producto("Langosta", new Precio(550.9)), 3)
        pedido.agregarElemento(elem1)
        pedido.agregarElemento(elem2)
        this.restaurante.registrarPedido(pedido)
        this.restaurante.listarPedidos()
    }
}

let app = new Main

app.pruebaFecha()
app.pruebaTiempo()
app.pruebaDireccion()
app.pruebaPrecio()
app.pruebaProducto()
app.pruebaElementoPedido()
app.pruebaPedido()
app.pruebaCliente()
app.pruebaRestaurante()
app.pruebaClienteFrecuente()