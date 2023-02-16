
export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const { disabled, selectLetter} = props;


    return (
        <div className="keyboard">
            {alfabeto.map((i, index) => <button onClick={() => selectLetter(i, index)} key={i} disabled={disabled}>{i.toUpperCase()}</button>)}
        </div>        
    )
    }