"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dados {
    constructor(texto, inteiro, booleano, opcaoSelect, opcaoRadio) {
        this.texto = texto;
        this.inteiro = inteiro;
        this.booleano = booleano;
        this.opcaoSelect = opcaoSelect;
        this.opcaoRadio = opcaoRadio;
    }
    getTexto() {
        return this.texto;
    }
    setTexto(texto) {
        this.texto = texto;
    }
    getInteiro() {
        return this.inteiro;
    }
    setInteiro(inteiro) {
        this.inteiro = inteiro;
    }
    getBooleano() {
        return this.booleano;
    }
    setBooleano(booleano) {
        this.booleano = booleano;
    }
    getOpcaoSelect() {
        return this.opcaoSelect;
    }
    setOpcaoSelect(opcaoSelect) {
        this.opcaoSelect = opcaoSelect;
    }
    getOpcaoRadio() {
        return this.opcaoRadio;
    }
    setOpcaoRadio(opcaoRadio) {
        this.opcaoRadio = opcaoRadio;
    }
    static fromJson(json) {
        return new Dados(json.texto, json.inteiro, json.booleano, json.opcaoSelect, json.opcaoRadio);
    }
}
exports.default = Dados;
