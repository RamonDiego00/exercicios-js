update estados
set nome = 'Maranhão'
-- Na mesma linha da sigla MA
where sigla = 'MA'

select nome from estados where sigla = 'MA'

update `estados`
set nome = 'Paraná', 
    populacao = 11.32
where sigla = 'PR'

select est.nome,
        sigla,
        populacao 
from estados est where sigla = 'PR'
-- Usar apelidos como o est para consultas de multiplas tabelas