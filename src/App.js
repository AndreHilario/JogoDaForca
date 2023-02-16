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
 
  const sortWord = palavras[Math.floor(Math.random() * (palavras.length - 1))];

  function startGame() {
    setDisabled(false);
    setWordToPlay(sortWord);
    setWordToPlay(sortWord.split(""));
    setShowNewWord(Array(sortWord.length).fill("_ "));
    console.log(sortWord)
    setCounterErrors(0);
    setSelectedLetters([]);
  
  }
  
  function selectLetter (string) {
    setSelectedLetters([...selectedLetters, string]);
    let showNewWord2 = [...showNewWord];
    if (wordToPlay.includes(string.toLowerCase())){
      wordToPlay.forEach((i, index) => {
        if(string === i){
          showNewWord2[index] = i;
        }
      });
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
