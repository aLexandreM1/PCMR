# PCManager
Este é um pequeno sistema que gerencia computadores de uma empresa.

# Como executar.
1. Você precisará criar um banco local ( CTRL+] , CTRL+S no visual studio ) ou View -> SQL Server Object Explorer.
2. Crie um banco com o nome PCManagerDB (Caso mude necessitará alterar a conection string), e execute o script SQL ( SQLScriptModelAndSeed.sql ) no banco encontrada na pasta DB.
3. Execute o projeto do visual studio.
4. Abra a pasta "Front" e por linha de comando digite 'npm install -g @angular/cli@1.4.10', 'npm install' e finalmente 'ng serve --open'.
    Seu browser abrirá já com a aplicação front-end rodando.