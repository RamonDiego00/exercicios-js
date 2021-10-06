select 
    regiao as 'Região',
    sum(populacao) as total
from estados
group by regiao
order by total desc

select 
    avg(populacao) as total
from estados
-- Pra descobrir a média de todos s estados