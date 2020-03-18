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
        this._calle = calle
        this._numeroExterior = numeroExterior
        this._numeroInterior = numeroInterior
        this._colonia = colonia
        this._codigoPostal = codigoPostal
        this._ciudad = ciudad
        this._municipio = municipio
    }

    getFormatoCorto(){
        return `${this._calle} ${this._numeroExterior}`
    }

    getFormatoExtend(){
        if (this._numeroInterior === 0){
            return `${this._codigoPostal}, ${this._calle} ${this._numeroExterior} (Sin Numero Interior), ${this._colonia}, ${this._ciudad}, ${this._municipio}`
        }
        else{
            return `${this._codigoPostal}, ${this._calle} ${this._numeroExterior} (No. Interior: ${this._numeroInterior}), ${this._colonia}, ${this._ciudad}, ${this._municipio}`
        }
    }
}