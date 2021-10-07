select 
    e.nome as Estado,
    c.nome as Cidade, regiao as Região 
from estados e, cidades c
where e.id = c.estado_id;
-- O where esta fazendo o relacionamento