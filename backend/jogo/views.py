from django.shortcuts import render
from rest_framework import generics
from .models import GameResult
from .serializers import GameResultSerializer

#essa classe e responsavel por criar uma página que mostra os resultados do jogo e pode receber novos resultados

class GameResultView(generics.ListCreateAPIView):
    queryset = GameResult.objects.all().order_by('-createdat') #Com essa linha de codigo a gente pega todos os resultados e organizamos ele por data e hora 
    serializer_class = GameResultSerializer
