select 
    e.nome as Estado,
    c.nome as Cidade, regiao as Região 
from estados e, cidades c
where e.id = c.estado_id;

select
    c.nome as cidade
    e.nome as estado
    regiao as região
from estados e
inner join cidades c on e.id = c.estado_id
-- O where esta fazendo o relacionamento
-- O inner join esta fazendo o relacionamento tbm 