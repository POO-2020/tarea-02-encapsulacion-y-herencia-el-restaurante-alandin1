
import Direccion from "./direccion.js"
import ElementoPedido from "./elementoPedido.js"
import Pedido from "./pedido.js"


export default class Restaurante{
    /**
     * @param {string} nombre 
     * @param {number} telefono 
     * @param {Direccion} direccion 
     */
    constructor({nombre, telefono, direccion}){
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._productos = new Array()
        this._pedidos = new Array()
    }

    registrarProducto(producto){
        this._productos.push(producto.getDescripcion())
    }

    listarProductos(){
        this._productos.forEach((producto, i) => {
            console.log(`${i+1} ${producto}`)
        })
    }

    _buscarPedido(pedido){
        let resultado = this._pedidos.find(ped => 
            ped._esIgualA(pedido))
            return resultado
    }


    registrarPedido(pedido){
        if (this._buscarPedido(pedido) !== undefined){
            return false
        }
        this._pedidos.push(pedido)
        return true
    }

    eliminarPedido(pedido, nuevoPed) {
        let resultado = this._buscarPedido(pedido)
        if(resultado < 0){
            return false
        } 
        this._pedidos.splice(resultado, 1, nuevoPed)
        return true
    }

    listarPedidos(){
        this._pedidos.forEach((pedido, i) =>{
            console.log(`${i+1} ${pedido.getResumen()}`)
        })
    }
}