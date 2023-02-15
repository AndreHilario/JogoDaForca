export default function Jogo(props) {
    return (
        <>
            <img src={props.image} alt={props.name} />
            <div className="choose-button">
                <button onClick={props.click}>Escolher palavra</button>
            </div>
            <div className="chosen-word">
                {props.showNewWord}
            </div>
        </>
    )
}