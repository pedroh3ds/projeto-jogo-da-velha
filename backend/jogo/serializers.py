from rest_framework import serializers
from .models import GameResult

class GameResultSerializer(serializers.ModelSerializer):
    class Meta:
        #Aqui a gente usa a model GameResult que criamos em models.py
        #e dizemos que queremos todos os campos dela
        model = GameResult
        fields = '__all__'

    # Aqui é checado se o valor do campo 'result' é válido
    def validate_result(self, value):
        if value not in ['X', 'O', 'Empate']:
            #se o valor não for valido, aparece a mensagem de erro abaixo
            raise serializers.ValidationError("Valor inválido para result")
        return value
