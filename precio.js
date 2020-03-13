export default class Precio{
    constructor(valor){
        this.valor = valor
    }
    
    getPrecio(){
        return (`El precio de su producto es $${new Intl.NumberFormat("en-UA").format(this.valor)}`)
    }
}