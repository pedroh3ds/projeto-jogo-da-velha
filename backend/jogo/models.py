from django.db import models

# Essa model representa o resultado de um jogo da velha

class GameResult(models.Model):
    result = models.CharField(max_length=10)  #É onde guarda quem ganhou a  partida "X", "O" ou "Empate"
    createdat = models.DateTimeField(auto_now_add=True) #Guarda a hora e a data que o resultado foi criado
