
export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="keyboard">
            {alfabeto.map((i, index) => {const select = props.selectedLetters.includes(i) 
            return (
                <button data-test="letter" onClick={() => props.selectLetter(i, index)} key={i} disabled={props.disabled || select}>{i.toUpperCase()}</button>)
            })}
        </div>        
    )
}