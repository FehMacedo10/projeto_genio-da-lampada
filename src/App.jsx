import lampadaMagica from './assets/lampadaMagica.png'
import genioDaLampada from './assets/genioDaLampada.png'
import { useState } from 'react'
import './app.scss'

export default function App() {

  //? Variável de Estado
  //? É uma caixinha que guarda um valor que pode mudar quando o usuário interagir com a página.
  const [lampada, setLampada] = useState(lampadaMagica);

  const acionarLampada = () => {
    setLampada (
      (lampada) => lampada === lampadaMagica ? genioDaLampada : lampadaMagica
    )
  }

  return (
    <main>  
      <p>"Liberte a magia da programação com a lâmpada de Aladim."</p>
      <img src={lampada} alt="Imagem de uma Lâmpada Mágica" />
      <button onClick={acionarLampada}>Clique Aqui</button>
    </main>
  )
}