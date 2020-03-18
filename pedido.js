import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js"

export default class Pedido{
    /**
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente
     */
    constructor(fecha, hora, cliente, numeroPedido){
        this._fecha = fecha
        this._hora = hora
        this._cliente = cliente
        this._numeroPedido = numeroPedido
        this._elementosPedidos = new Array()
    }

    getNumeroPedido(){
        return this._numeroPedido
    }

    _esIgualA(pedido){
        if(pedido.getNumeroPedido() == this._numeroPedido){ return true}
        else {return false}
    }

    agregarElemento(elePedido){
        this._elementosPedidos.push(elePedido)
    }
    
    listarElementos(){
        this._elementosPedidos.forEach((elePedido, i) => {
            console.log(`${i + 1} - ${elePedido.getDescripcion()}`)
        })
    }

    getResumen(){
        return `${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this.getNumeroElementos()} Elementos con ${this.getProductos()} Productos, Total: ${this.getCostoTotal()}`
    }
    
    getNumeroElementos(){
        return `${this._elementosPedidos.length}`
    }
    getProductos(){
        let i = 0
        this._elementosPedidos.forEach(elementoPedido => {i = elementoPedido.cantidad + i})
        return i
    }
    getCostoTotal(){
        let i = 0
        this._elementosPedidos.forEach(elementoPedido => {
            i = (elementoPedido.getCantidad * elementoPedido.getPrecio) + i})
        return `$${new Intl.NumberFormat("en-US").format(i)}`
    }
}
    