import Precio from "./precio.js"
export default class Producto {
    /**
     * @param {string} nombre del producto
     * @param {Precio} precio del mismo
     */
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }

    getDescripcion(){
        return `${this.nombre} ${this.precio.getPrecio()}`
    }
}