import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jogo, setJogo] = useState(Array(9).fill(null)); /*Cria um espaco que guarda o estado do jogo (se é X, O ou null) */ 
  const [vez, setVez] = useState("X"); /* Guarda de quem é a vez de jogar*/
  const [mensagem, setMensagem] = useState("Vez do jogador X"); /* essa é a mensagem que aparece represetnado de quem é a vez de jogar*/

  /* Essa função define como vai funcionar o click e a selecão das casas*/
  function clicar(pos) {
    /* se ja tiver ocupada ou vencedor não faz nada*/
    if (jogo[pos] || vencedor(jogo)) return;

    const novo = [...jogo];
    /* Marca a casa que o jogador clicou*/
    novo[pos] = vez;
    /* Atualiza o estado do jogo*/
    setJogo(novo);

    const ganhador = vencedor(novo);/* Verifica se tem um vencedor ou deu empate*/
    /* se algum jogador tiver ganhado, aparece uma mensagem e envia o resultado pro backend */
    if (ganhador) {
      setMensagem("Jogador " + ganhador + " venceu");
      enviarResultado(ganhador);
      /*Verifica se houve empate */
    } else if (!novo.includes(null)) {
      setMensagem("Empate");
      enviarResultado("Empate");
    /* se não tiver ganhador, troca a vez do jogador*/
    } else {
      const prox = vez === "X" ? "O" : "X";
      setVez(prox);
      setMensagem("Vez do jogador " + prox);
    }
  }
  /* Essa funcão serve par areiniciar o jogo*/
  function reiniciar() {
    setJogo(Array(9).fill(null));
    setVez("X");
    setMensagem("Vez do jogador X");
  }

   /* Essa função verifica se tem um vencedor */
  function vencedor(tab) {
    /* essa é a lisat de combinações que pode gerar um vencedor*/
    const combinacoes = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6],
    ];
    /*A lógica foi a seguinte: para cada combinação verifica se as 3 casas são iguais e não estão vazias*/
    for (let c of combinacoes) {
      const [a,b,c2] = c;
      if (tab[a] && tab[a] === tab[b] && tab[a] === tab[c2]) {
        return tab[a]; /* retorna quem ganhou */
      }
    }
    return null; /* se ninguem tiver ganhado, ira retornar null*/
  }

   /* essa função envia o resultado pro backend */
  async function enviarResultado(resultado) {
    try {
      await axios.post("http://localhost:8000/api/results/", {result: resultado});
    } catch (err) {
      setMensagem("Erro ao salvar resultado");
    }
  }

  /*Essa parte é oque aparece na tela do jogo */
  return (
    <div className="app">
      <h1>Jogo da Velha</h1>
      <p>{mensagem}</p>
      <div className="tabuleiro">
        {jogo.map((valor, i) => (
          <button key={i} onClick={() => clicar(i)} className="casa">{valor}</button>
        ))}
      </div>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default App;
