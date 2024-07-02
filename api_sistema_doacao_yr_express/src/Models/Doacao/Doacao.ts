import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LocalDate, LocalTime } from '@js-joda/core';
import Doador from '../Doador/Doador';

@Entity('doacoes')
class Doacao {
    @PrimaryGeneratedColumn('increment')
    codigo: number;

    @Column({ type: 'date' })
    data: LocalDate;

    @Column({ type: 'time' })
    hora: LocalTime;

    @Column({ type: 'int' })
    volume: number;

    @ManyToOne(() => Doador, doador => doador.doacoes)
    doador: Doador;

    @Column({ type: 'varchar', length: 10, default: 'ATIVO'})
    situacao: string;

    constructor(codigo: number, data: LocalDate, hora: LocalTime, volume: number, doador: Doador, situacao: string) {
        this.codigo = codigo;
        this.data = data;
        this.hora = hora;
        this.volume = volume;
        this.doador = doador;
        this.situacao = situacao;
    }

    public static fromJson(json: Doacao): Doacao {
        return new Doacao(
            json.codigo,
            json.data,
            json.hora,
            json.volume,
            json.doador,
            json.situacao
        );
    }
}

export default Doacao;
