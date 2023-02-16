import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo(props) {

    const {errors, showNewWord, startGame, finalAnswer} = props;

    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    return (
        <>
            <img data-test="game-image" src={images[errors]} alt="Imagem da forca" />
            <div className="choose-button">
                <button data-test="choose-word" onClick={startGame}>Escolher palavra</button>
            </div>
            <div data-test="word" className={finalAnswer}>
                {showNewWord}
            </div>
        </>
    )
}