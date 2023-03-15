# Aplicação Node.js com Express e npm - Gerenciamento de Companhias, Unidades, Ativos e Usuários

## Este é um projeto de exemplo para uma aplicação Node.js com Express e npm que permite gerenciar companhias, unidades, ativos e usuários. A aplicação permite realizar as operações básicas de CRUD (criar, ler, atualizar e excluir) para cada uma dessas entidades. 

----------------------------------------------------------------

### Pré-requisitos  
  - Node.js instalado  
  - npm instalado  

### Instalação
  - Clone este repositório: git clone https://github.com/JeanB762/app-challenge-server  
  - Navegue até o diretório raiz: cd nome-do-repositorio  
  - Instale as dependências: npm install  
  - Crie um arquivo de .env com base no arquivo .env-example
  - Adicione a string de conexão com o MongoDB ao arquivo .env criado

### Inicie o servidor: 
  #### `npm run dev`  

## Endpoints:  

### Companhias
`GET /company - Retorna todas as companhias`  
`GET /company/:id - Retorna uma companhia específica pelo ID`  
`POST /company - Cria uma nova companhia`  
`PUT /company/:id - Atualiza uma companhia existente pelo ID`   
`DELETE /company/:id - Exclui uma companhia existente pelo ID`    

### Unidades  
`GET /units - Retorna todas as unidades`  
`GET /units/:id - Retorna uma unidade específica pelo ID`  
`POST /units - Cria uma nova unidade`  
`PUT /units/:id - Atualiza uma unidade existente pelo ID`  
`DELETE /units/:id - Exclui uma unidade existente pelo ID`  

### Ativos  
`GET /assets - Retorna todos os ativos`  
`GET /assets/:id - Retorna um ativo específico pelo ID`  
`POST /assets - Cria um novo ativo`  
`PUT /assets/:id - Atualiza um ativo existente pelo ID`  
`DELETE /assets/:id - Exclui um ativo existente pelo ID`  

### Usuários  
`GET /accounts - Retorna todos os usuários`  
`GET /accounts/:id - Retorna um usuário específico pelo ID`  
`POST /accounts - Cria um novo usuário`  
`PUT /accounts/:id - Atualiza um usuário existente pelo ID`  
`DELETE /accounts/:id - Exclui um usuário existente pelo ID`  
