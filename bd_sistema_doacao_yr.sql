CREATE TABLE doador(

	codigo_doador serial primary key,
	nome varchar(255),
	cpf varchar(16),
	genero char(1),
	tipo_e_fatorrh char(3),
	is_tipo_correto bool,
	situacao char(20)

);

CREATE TABLE contato(

	codigo_doador integer,
	numero_telefone char(20),
	
	FOREIGN KEY (codigo_doador) REFERENCES doador(codigo_doador)
	
);

CREATE TABLE doacao(
	
	codigo_doacao serial primary key,
	codigo_doador integer,
	data date,
	hora time,
	volume numeric(10,2),
	situacao char(20),
	
	FOREIGN KEY (codigo_doador) REFERENCES doador(codigo_doador)
	
);