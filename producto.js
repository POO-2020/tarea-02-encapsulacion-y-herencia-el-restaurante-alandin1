import Precio from "./precio.js"
export default class Producto {
    /**
     * @param {string} nombre del producto
     * @param {Precio} precio del mismo
     */
    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
    }

    getNombre(){
        return this._nombre
    }

    getPrecio(){
        return this._precio.getValor()
    }

    getDescripcion(){
        return `${this._nombre} ${this._precio.getPrecio()}`
    }
}