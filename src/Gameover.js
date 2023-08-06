import './Gameover.scss';

function Gameover(props) {
    function clickStartAgain() {
        props.changeScore(0)
        props.navigatePage('game')
    }

    function returnHome() {
        props.changeScore(0)
        props.navigatePage('')
    }

    return (
        <div id="gameover-container">
            <p>Game over! <br /> <br /> Your score is {props.score}</p> 
            <p>{props.prime} = </p>
            <button onClick={clickStartAgain}>Start again</button> <br /> <br />
            <button id="btn-home" onClick={returnHome}>Home</button>
        </div>
    )
}

export default Gameover
