export default class Fecha {
    /**
     * 
     * @param {number} dia dia del año
     * @param {number} mes mes del año
     * @param {number} año año del año
     */
    constructor(dia, mes, año) {
        this._fecha = new Date(año, mes-1, dia);
        this._diaS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        this._mes = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"]
    }

    getAños(){
        let result = this._fecha.getFullYear() - new Date(Date.now()).getFullYear() 
        return result
    }

    getMeses(){
        return this.getAños() * 12
    }

    getSemanas(){
        return this.getMeses() * 4
    }

    getDias(){
        return this.getSemanas() * 7
    }

    getFecha(){
        let fechaFormato = `${this._fecha.getDate()}/${this._mes[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`
        return fechaFormato
    }
    
    getDiaFecha(){
        let diaF = this._diaS[this._fecha.getDay()]
        return diaF
    }
}