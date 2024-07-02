import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { isTipoSanguineo, TipoSanguineo } from '../Enums/TipoSanguineo';
import { isFatorRH, FatorRH } from '../Enums/FatorRH';
import Doacao from '../Doacao/Doacao';

@Entity('doadores')
class Doador {

    @PrimaryGeneratedColumn('increment')
    codigo: number;

    @Column({ type: 'varchar', length: 100 })
    nome: string;

    @Column({ type: 'varchar', length: 20 })
    cpf: string;

    @Column({ type: 'varchar', length: 50 })
    contato: string;

    @Column({ type: 'varchar', length: 5 })
    tipoSanguineo: TipoSanguineo;

    @Column({ type: 'varchar', length: 3 })
    fatorRh: FatorRH;

    @Column({ type: 'boolean', default: false })
    tipoRhCorretos: boolean;

    @Column({ type: 'varchar', length: 10, default: 'ATIVO' })
    situacao: string; 

    @OneToMany(() => Doacao, (doacao: Doacao) => doacao.doador)
    doacoes: Doacao[];

    constructor(
        codigo: number,
        nome: string,
        cpf: string,
        contato: string,
        tipoSanguineo: TipoSanguineo,
        fatorRH: FatorRH,
        tipoRhCorretos: boolean,
        situacao: string,
        doacoes: Doacao[]
    ) { 
        this.codigo = codigo;
        this.nome = nome;
        this.cpf = cpf; 
        this.contato = contato;
        this.tipoSanguineo = tipoSanguineo; 
        this.fatorRh = fatorRH;
        this.tipoRhCorretos = tipoRhCorretos;
        this.situacao = situacao;
        this.doacoes = doacoes;
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
        this.cpf = cpf;
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

    public getFatorRh() {
        return this.fatorRh;
    }

    public setFatorRH(fatorRh: FatorRH) {
        if (isFatorRH(fatorRh)) {
            this.fatorRh = fatorRh;
        }
    }

    public getTipoRhCorretos() {
        return this.tipoRhCorretos;
    }

    public setTipoRhCorretos(tipoRhCorretos: boolean) {
        this.tipoRhCorretos = tipoRhCorretos;
    }

    public static fromJson(json: Doador): Doador {
        return new Doador(
            json.codigo,
            json.nome,
            json.cpf,
            json.contato,
            json.tipoSanguineo,
            json.fatorRh,
            json.tipoRhCorretos,
            json.situacao,
            json.doacoes
        );
    }

}

export default Doador;
