export default function Letras(props) {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="keyboard">
            {alfabeto.map((s) => <button disabled>{s}</button>)}
        </div>        
    )
}