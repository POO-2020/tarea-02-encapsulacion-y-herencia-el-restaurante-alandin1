import Precio from "./precio.js"
export default class elementoPedido {
    constructor(producto, cantidad){
        this._producto = producto
        this._cantidad =cantidad
    }

    getPrecio(){
        return (this._producto.getPrecio())
    }

    getCantidad(){
        return this._cantidad
    }

    getDescripcion(){
        let total = (this._cantidad * this._producto.getPrecio())
        total = new Precio (total)
        return `${this._cantidad} x ${this._producto.getNombre()} $${total.getPrecio()}`
    }
}