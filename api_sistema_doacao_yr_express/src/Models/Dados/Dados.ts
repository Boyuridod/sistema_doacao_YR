class Dados {

    constructor(
        private texto: string,
        private inteiro: number,
        private booleano: boolean,
        private opcaoSelect: string,
        private opcaoRadio: string
    ) { }

    public getTexto() {
        return this.texto;
    }

    public setTexto(texto: string) {
        this.texto = texto;
    }

    public getInteiro() {
        return this.inteiro;
    }

    public setInteiro(inteiro: number) {
        this.inteiro = inteiro;
    }

    public getBooleano() {
        return this.booleano;
    }

    public setBooleano(booleano: boolean) {
        this.booleano = booleano;
    }

    public getOpcaoSelect() {
        return this.opcaoSelect;
    }

    public setOpcaoSelect(opcaoSelect: string) {
        this.opcaoSelect = opcaoSelect;
    }

    public getOpcaoRadio() {
        return this.opcaoRadio;
    }

    public setOpcaoRadio(opcaoRadio: string) {
        this.opcaoRadio = opcaoRadio;
    }
}