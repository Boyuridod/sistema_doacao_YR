enum TipoSanguineo {
    // Tipo A
    A = 'A',

    // Tipo B
    B = 'B',

    // Tipo AB
    AB = 'AB',

    // Tipo O
    O = 'O',
}

function isTipoSanguineo(valor: string): valor is TipoSanguineo {
    return Object.values(TipoSanguineo).includes(valor as TipoSanguineo);
}

export { TipoSanguineo, isTipoSanguineo };