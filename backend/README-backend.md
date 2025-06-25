-Esse é o backend do projeto Jogo da Velha, ele é responsável por grande parte do funcionamento do código, pois foi onde esta presente as rotas, funções definidas, etc. Este projeto foi desenvolvido usando Django e Django REST Framework. É responsável por receber o resultado das partidas no frontend e envia-las para o banco de dados.
-Os comentários dentro dos arquivos explica muito bem o que cada arquivo e função faz.

COMO RODAR O BACKEND:
-(No terminal)

Acesse a pasta do backend: 
-cd backend

Ative o venv: 
-venv\Scripts\activate

Instale as ferramentas necessarias:
-pip install django djangorestframework django-cors-headers

Faça as migrações:
-python manage.py makemigrations
-python manage.py migrate

Inicie o Servidor:
-python manage.py runserver

ENDPOINTS DISPONIVEIS:
* Endpoint POST /api/results/ para receber o resultado do jogo.
* Endpoint GET /api/results/ que retorna a lista de todos os resultados
salvos.

BANCO DE DADOS
-Os resultados são salvos automaticamente ao final de toda partida é possível ver em http://localhost:8000/api/results/

Obs: A comunicação entre frontend e backend usa axios + API REST. De acordo com as especificações pedidas no pdf