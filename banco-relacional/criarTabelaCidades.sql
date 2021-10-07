create table if not exists cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id int unsigned NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY(estado_id) REFERENCES estados (id)
);

-- Unsigned quer dizer sem simbolos, tipo acento

-- Sempre colocar um ponto e virgula no final

-- O FK esta fazendo o relacionamento