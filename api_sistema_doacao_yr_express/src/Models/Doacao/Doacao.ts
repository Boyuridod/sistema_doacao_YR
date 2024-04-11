import { LocalDate, LocalTime } from '@js-joda/core';

class Doacao {

    constructor(
        private codigo: number,
        private data: LocalDate,
        private hora: LocalTime,
        private volume: number
    ) { }


    public getCodigo() {
        return this.codigo;
    }

    public setCodigo(codigo: number) {
        this.codigo = codigo;
    }

    public getDate(){
        return this.data
    }

    public setDate(data: LocalDate){
        this.data = data
    }

    public getHora(){
        return this.hora
    }

    public setHora(hora: LocalTime){
        this.hora = hora
    }

    public getVolume(){
        return this.volume;
    }

    public setVolume(volume: number){
        this.volume = volume;
    }

    public static fromJson(json: Doacao): Doacao {
        return new Doacao(
            json.codigo,
            json.data,
            json.hora,
            json.volume
        )
    }
}

export default Doacao;