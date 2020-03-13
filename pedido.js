import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js"

export default class Pedido{
    /**
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente
     */
    constructor(fecha, hora, cliente){
        this.fecha = fecha
        this.hora = hora
        this.cliente = cliente
        this.elementosPedidos = new Array()
    }
    agregarElemento(elementoPedido){
        this.elementosPedidos.push(elementoPedido)
    }
    listarElementos(){
        this.elementosPedidos.forEach((elementoPedido, i) => {
            console.log(`${i} - ${elementoPedido.getDescripcion()}`)
        })
    }
    getResumen(){
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} Elementos con ${this.getProductos()} Productos, Total: ${this.getCostoTotal()}`
    }
    getNumeroElementos(){
        return `${this.elementosPedidos.length}`
    }
    getProductos(){
        let i = 0
        this.elementosPedidos.forEach(elementoPedido => {i = elementoPedido.cantidad + i})
        return i
    }
    getCostoTotal(){
        let i = 0
        this.elementosPedidos.forEach(elementoPedido => {i = (elementoPedido.cantidad * elementoPedido.producto.precio.valor) + i})
        return `$${new Intl.NumberFormat("en-US").format(i)}`
    }
}
    