export default class Precio{
    constructor(valor){
        this._valor = valor
    }
    
    getPrecio(){
        return (`El precio de su producto es $${new Intl.NumberFormat("en-UA").format(this._valor)}`)
    }
}