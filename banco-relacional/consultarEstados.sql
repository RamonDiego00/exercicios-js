-- Pesquisar toda a tabela(Ctrl+Shift+E)
SELECT * FROM estados 

-- Pesquisar colunas e nomealas
SELECT 
    sigla,
    nome as 'Nome do Estado'
     from estados
     where regiao = 'Sul'
-- Filtros para encontrar linhas e ordenalas
SELECT nome, regiao from estados 
where populacao >= 10 
order by populacao desc
-- O select separa as sentenças
