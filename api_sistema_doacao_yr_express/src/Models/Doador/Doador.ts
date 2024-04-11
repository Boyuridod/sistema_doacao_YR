enum TipoSanguineo {

    A = "A",
    B = "B",
    AB = "AB",
    O = "O",

}

enum FatorRH {

    positivo = "+",
    negativo = "-",

}

class Doador {

    constructor(

        private codigo: number,
        private nome: string,
        private cpf: string,
        private contato: string,
        private tipoSanguineo: TipoSanguineo,
        private fatorRH: FatorRH,
        private tipoRhCorretos: boolean

    ) { }

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

        this.tipoSanguineo = tipoSanguineo;

    }

    public getFatorRH() {

        return this.fatorRH;

    }

    public setFatorRH(fatorRH: FatorRH) {

        this.fatorRH = fatorRH;

    }

    public getTipoRhCorretos() {

        return this.tipoRhCorretos;

    }

    public setTipoRhCorretos(tipoRhCorretos: boolean) {

        this.tipoRhCorretos = tipoRhCorretos

    }

}

export default Doador;