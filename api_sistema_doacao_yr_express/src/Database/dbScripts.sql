BEGIN;

CREATE TABLE IF NOT EXISTS public.doador
(
    codigo bigserial NOT NULL,
    nome text,
    cpf text,
    contato text,
    tipo_sanguineo text,
    rh text,
    tipo_rh_corretos boolean,
    situacao text,
    PRIMARY KEY (codigo)
);

CREATE TABLE IF NOT EXISTS public.doacao
(
    codigo bigserial NOT NULL,
    data date,
    hora time without time zone,
    volume numeric(10, 3),
    situacao text,
    codigo_doador bigint,
    PRIMARY KEY (codigo_doador)
);

ALTER TABLE IF EXISTS public.doacao
    ADD FOREIGN KEY (codigo_doador)
    REFERENCES public.doador (codigo) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
