import Direccion from "./direccion.js"

export default class Restaurante{
    /**
     * @param {string} nombre 
     * @param {number} telefono 
     * @param {Direccion} direccion 
     */
    constructor(nombre, telefono, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.productos = new Array()
        this.pedidos = new Array()
    }
    registrarProducto(producto){
        this.productos.push(producto.getDescripcion())
    }
    listarProductos(){
        this.productos.forEach((producto, i) => {
            console.log(`${i+1} ${producto}`)
        })
    }
    registrarPedido(pedido){
        this.pedidos.push(pedido.getResumen())
    }
    listarPedidos(){
        this.pedidos.forEach((pedido, i) =>{
            console.log(`${i+1} ${pedido}`)
        })
    }
}