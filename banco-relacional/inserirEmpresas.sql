alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 95694186000132),
    ('Vale', 93252098000155),
    ('Cielo', 46383813000109);

desc empresas;
desc prefeitos;
-- É tipo um select porem falando o tipo aceito em cada coluna
select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 5, 0),
    (2, 1, 0),
    (2, 5, 1);