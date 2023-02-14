import Jogo from "./components/Jogo";
import Letras from "./components/Letras";


export default function App() {
  return (
    <div className="game">
      <Jogo image="assets/forca0.png" name="Imagem da Forca0"/>
      <Letras />
    </div>
  )
}
