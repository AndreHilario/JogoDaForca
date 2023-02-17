
export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const {selectedLetters, selectLetter, disabled} = props;
    return (
        <div className="keyboard">
            {alfabeto.map((i, index) => {const select = selectedLetters.includes(i) 
            return (
                <button data-test="letter" onClick={() => selectLetter(i, index)} key={i} disabled={disabled || select}>{i.toUpperCase()}</button>)
            })}
        </div>        
    )
}