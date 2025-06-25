-Esse é o frontend do projeto Jogo da Velha, ele é responsável pela parte visual e interface do código, pois é a parte em que o usuário consegue ver no navegador e inteeragir. Este projeto foi desenvolvido usando React  e Vite. É responsável por permitir que os jogadores se enfrentem e enviar os resultados dos jogos para o banco de dados
-Os comentários dentro dos arquivos explica muito bem o que cada arquivo e função faz.

COMO RODAR O FRONTEND:
-(No terminal)

Acesse a pasta do frontend: 
-cd frontend

Instale as ferramentas necessarias:
-npm install

Inicie o Servidor:
-npm run dev

COMUNICAÇÃO BACKEND-FRONTEND:
-foi usado o axios para fazer a conexão. O trecho de código abaixo pode ser observado no App.jsx
* "await axios.post("http://localhost:8000/api/results/", { result: resultado });"


Obs: O código está comentado com explicações simples sobre como cada parte funciona