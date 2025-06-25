from django.urls import path
from .views import GameResultView


# Essas säo as rotas usadas para acessar os resultados do jogo
urlpatterns = [
    path('results/', GameResultView.as_view()),  #Essa é a rota usada, ela faz isso através das requisições GET e POST
]
