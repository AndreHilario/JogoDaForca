import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import { useState } from "react";
import Chute from "./components/Chute";


export default function App() {
  const [disabled, setDisabled] = useState(true);
  const [wordToPlay, setWordToPlay] = useState([]);
  const [counterErrors, setCounterErrors] = useState(0);
  const [showNewWord, setShowNewWord] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("chosen-word");
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [kickedWord, setKickedWord] = useState("");
 
  const sortWord = palavras[Math.floor(Math.random() * (palavras.length - 1))];
  let counter = 0;

  function startGame() {
    setDisabled(false);
    setWordToPlay(sortWord);
    setWordToPlay(sortWord.split(""));
    setShowNewWord(Array(sortWord.length).fill("_ "));
    setCounterErrors(0);
    setFinalAnswer("chosen-word");
    setSelectedLetters([]);
  
  }
  
  function selectLetter (string) {
    let showNewWord2 = [...showNewWord];
    setSelectedLetters([...selectedLetters, string]);

    if (wordToPlay.includes(string)){
      wordToPlay.forEach((i, index) => {

        if(string === i){
          showNewWord2[index] = i;
        }
      }); 
      setShowNewWord(showNewWord2);
    } else {
      counter = counterErrors + 1;
      setCounterErrors(counter);
    }

    if (counter === 6){
      setShowNewWord(wordToPlay.join(""));
      setFinalAnswer(`${finalAnswer} wrong-answer`);
      setDisabled(true);
    } else if (counter < 6 && showNewWord2.join("") === wordToPlay.join("")){
      setShowNewWord(wordToPlay.join(""));
      setFinalAnswer(`${finalAnswer} correct-answer`);
      setDisabled(true);
    } 

  }

  function kickedAnswer() {
    setKickedWord("");
    if(kickedWord.toLowerCase() === wordToPlay.join("")) {
      setShowNewWord(wordToPlay.join(""));
      setFinalAnswer(`${finalAnswer} correct-answer`);
      setDisabled(true);
    } else {
      setShowNewWord(wordToPlay.join(""));
      setFinalAnswer(`${finalAnswer} wrong-answer`);
      setCounterErrors(6);
      setDisabled(true);
    }

  }


  return (
    <div className="game">
      <Jogo disabled={disabled} errors={counterErrors} showNewWord={showNewWord} finalAnswer={finalAnswer} startGame={startGame}/>

      <Letras disabled={disabled} selectedLetters={selectedLetters} selectLetter={selectLetter} />

      <Chute disabled={disabled} setKickedWord={setKickedWord} kickedWord={kickedWord} kickedAnswer={kickedAnswer} />
    </div>
  );
}
