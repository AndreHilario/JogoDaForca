import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png"
import { useState } from "react";


export default function App() {

  const [image, setImage] = useState(forca0);
  const [disabled, setDisabled] = useState(true);
  const [erros, setErros] = useState(0);
  const [showNewWord, setShowNewWord] = useState("");
  const [keyboard, setKeyboard] = useState("keyboard");

  const startGame = () => {
    setDisabled(false);
    setErros(0);
    const word = palavras[Math.floor(Math.random() * (palavras.length - 1) )];
    const arrayWord = word.split('');
    setShowNewWord(arrayWord.fill("_ "));
    setKeyboard("keyboard-enabled");
  }

 /*  const selectLetter = () => {

  } */


  return (
    <div className="game">
      <Jogo showNewWord={showNewWord} image={image} name="Imagem da Forca" click={startGame} />

      <Letras disabled={disabled} keyboard={keyboard} /* select={selectLetter} */ />
    </div>
  )
}
