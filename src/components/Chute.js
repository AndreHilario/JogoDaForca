export default function Chute(props) {
    const {disabled, setKickedWord, kickedWord, kickedAnswer} = props;

    return (
        <>
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={disabled} type="text" placeholder="" onChange={(e) => setKickedWord(e.target.value)} value={kickedWord}>
            </input>
            <button data-test="guess-button" disabled={disabled} className="kick" onClick={kickedAnswer}>Chutar</button>
        </>
    )
}