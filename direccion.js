export default class Direccion {
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior en caso de no tener, poner: 0
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this.calle = calle
        this.numeroExterior = numeroExterior
        this.numeroInterior = numeroInterior
        this.colonia = colonia
        this.codigoPostal = codigoPostal
        this.ciudad = ciudad
        this.municipio = municipio
    }

    getFormatoCorto(){
        return `${this.calle} ${this.numeroExterior}`
    }

    getFormatoExtend(){
        if (this.numeroInterior === 0){
            return `${this.codigoPostal}, ${this.calle} ${this.numeroExterior} (Sin Numero Interior), ${this.colonia}, ${this.ciudad}, ${this.municipio}`
        }
        else{
            return `${this.codigoPostal}, ${this.calle} ${this.numeroExterior} (No. Interior: ${this.numeroInterior}), ${this.colonia}, ${this.ciudad}, ${this.municipio}`
        }
    }
}