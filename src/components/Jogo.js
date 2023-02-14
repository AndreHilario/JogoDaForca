export default function Jogo(props) {
    return (
        <>
            <img src={props.image} alt={props.name} />
            <div className="choose-button">
                <button disabled>Escolher palavra</button>
            </div>
            <div className="chosen-word"></div>
        </>
    )
}