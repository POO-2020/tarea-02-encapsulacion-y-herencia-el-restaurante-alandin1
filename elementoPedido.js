import Precio from "./precio.js"
export default class elementoPedido {
    constructor(producto, cantidad){
        this._producto = producto
        this._cantidad =cantidad
    }
    getDescripcion(){
        let precioF = this._cantidad * this._producto.precio.valor
        return `${this._cantidad} x ${this._producto.nombre} $${new Intl.NumberFormat("en-US").format(precioF)}`
    }
}