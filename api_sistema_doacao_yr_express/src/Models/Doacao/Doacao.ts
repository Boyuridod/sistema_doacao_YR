import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { LocalDate, LocalTime } from '@js-joda/core';


@Entity()
class Doacao {

    @PrimaryGeneratedColumn({name: 'codigo'})
    private codigo: number;
    @Column({name: 'data'})
    private data: LocalDate;
    @Column({name: 'hora'})
    private hora: LocalTime;
    @Column({name: 'volume'})
    private volume: number;

    constructor(
        codigo: number,
        data: LocalDate,
        hora: LocalTime,
        volume: number
    ) {
        this.codigo = codigo;
        this.data = data;
        this.hora = hora;
        this.volume = volume;
    }


    public getCodigo() {
        return this.codigo;
    }

    public setCodigo(codigo: number) {
        this.codigo = codigo;
    }

    public getDate() {
        return this.data
    }

    public setDate(data: LocalDate) {
        this.data = data
    }

    public getHora() {
        return this.hora
    }

    public setHora(hora: LocalTime) {
        this.hora = hora
    }

    public getVolume() {
        return this.volume;
    }

    public setVolume(volume: number) {
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