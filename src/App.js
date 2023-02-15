import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import forca0 from "./assets/forca0.png"


export default function App() {
  return (
    <div className="game">
      <Jogo image={forca0} name="Imagem da Forca0"/>
      <Letras />
    </div>
  )
}
