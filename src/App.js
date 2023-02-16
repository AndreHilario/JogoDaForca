import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import { useState } from "react";


export default function App() {
  const [disabled, setDisabled] = useState(true);
  const [wordToPlay, setWordToPlay] = useState([]);
  const [counterErrors, setCounterErrors] = useState(0);
  const [showNewWord, setShowNewWord] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);
  


  function startGame() {
    setDisabled(false);
    const sortWord = palavras[Math.floor(Math.random() * (palavras.length - 1))];
    setWordToPlay(sortWord);
    setWordToPlay(sortWord.split(""));
    setShowNewWord(Array(sortWord.length).fill("_ "));
  }
  
  function selectLetter (string) {
    setSelectedLetters([...selectedLetters, string]);

    if (wordToPlay.includes(string.toLowerCase())){
      let showNewWord2 = [...showNewWord];
      wordToPlay.forEach((i, index) => {
        showNewWord2[index] = i.toUppercase();
      })
      setShowNewWord(showNewWord2);
    } else {
      setCounterErrors(counterErrors + 1);
    }

  }


  return (
    <div className="game">
      <Jogo disabled={disabled} errors={counterErrors} showNewWord={showNewWord} startGame={startGame}/>

      <Letras disabled={disabled} selectedLetters={selectedLetters} selectLetter={selectLetter} />
    </div>
  )
}
