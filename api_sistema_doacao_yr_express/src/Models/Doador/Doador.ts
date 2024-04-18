import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { isTipoSanguineo, TipoSanguineo } from '../Enums/TipoSanguineo';
import { isFatorRH, FatorRH } from '../Enums/FatorRH';

@Entity()
class Doador {

    @PrimaryGeneratedColumn()
    private codigo: number;
    @Column()
    private nome: string;
    @Column()
    private cpf: string;
    @Column()
    private contato: string;
    @Column()
    private tipoSanguineo: TipoSanguineo;
    @Column()
    private fatorRH: FatorRH;
    @Column()
    private tipoRhCorretos: boolean;

    constructor(

        codigo: number,
        nome: string,
        cpf: string,
        contato: string,
        tipoSanguineo: TipoSanguineo,
        fatorRH: FatorRH,
        tipoRhCorretos: boolean

    ) { 
        this.codigo = codigo;
        this.nome = nome;
        this.cpf = cpf; 
        this.contato = contato;
        this.tipoSanguineo = tipoSanguineo; 
        this.fatorRH = fatorRH;
        this.tipoRhCorretos = tipoRhCorretos; 
    }

    public getCodigo() {

        return this.codigo;

    }

    public setCodigo(codigo: number) {

        this.codigo = codigo;

    }

    public getNome() {

        return this.nome;

    }

    public setNome(nome: string) {

        this.nome = nome;

    }

    public getCpf() {

        return this.cpf;

    }

    public setCpf(cpf: string) {

        this.cpf = cpf

    }

    public getContato() {

        return this.contato;

    }

    public setContato(contato: string) {

        this.contato = contato;

    }

    public getTipoSanguine() {

        return this.tipoSanguineo;

    }

    public setTipoSanguineo(tipoSanguineo: TipoSanguineo) {

        if (isTipoSanguineo(tipoSanguineo)) {
            this.tipoSanguineo = tipoSanguineo;
        }
    }

    public getFatorRH() {

        return this.fatorRH;
    }

    public setFatorRH(fatorRH: FatorRH) {
        if (isFatorRH(fatorRH)) {
            this.fatorRH = fatorRH;
        }
    }

    public getTipoRhCorretos() {

        return this.tipoRhCorretos;
    }

    public setTipoRhCorretos(tipoRhCorretos: boolean) {

        this.tipoRhCorretos = tipoRhCorretos
    }

    public static fromJson(json: Doador): Doador {
        return new Doador(
            json.codigo,
            json.nome,
            json.cpf,
            json.contato,
            json.tipoSanguineo,
            json.fatorRH,
            json.tipoRhCorretos
        )
    }

}

export default Doador;