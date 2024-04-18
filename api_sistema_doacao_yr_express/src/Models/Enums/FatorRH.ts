enum FatorRH {
    // Representa o fator RH positivo
    POSITIVO = '+',

    // Representa o fator RH negativo
    NEGATIVO = '-'
}

// Função para verificar se um valor é um fator RH válido
function isFatorRH(valor: string): valor is FatorRH {
    return valor === FatorRH.POSITIVO || valor === FatorRH.NEGATIVO;
}

export { FatorRH, isFatorRH };
