import Direccion from "./direccion.js"

export default class Cliente{
    /**
     * 
     * @param {string} nombre 
     * @param {Direccion} direccion
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    getPerfil(){
        return `${this.nombre}, ${this.direccion.getFormatoCorto()}, ${this.telefono}`
    }
}