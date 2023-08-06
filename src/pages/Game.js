import './Game.scss'
import { useState, useEffect } from 'react';
import Card from '../components/Card';

function Game(props) {
    const [timeRem, setTimeRem] = useState(30)

    useEffect(() => {
        let timer = setInterval(() => {
            setTimeRem(t => {
                if (t > 0) return t - 1
                else {
                    clearInterval(timer)
                    props.navigatePage('gameover')
                }
            })
        }, 1000)

        showRandomPrime()
    }, [])

    function checkPrime(n) {
        if (n <= 1) return false
        if (n === 2) return true
        if (n % 2 === 0) return false
    
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false
            }
        }
    
        return true
    }

    function randInt(min, max) {
        return Math.floor(Math.random()*(max - min + 1)) + min
    }

    function showRandomPrime() {
        props.changePrime(randInt(1,100))
    }

    function clickYes() {
        if (checkPrime(props.prime)) {
           props.changeScore(props.score + 1)
           showRandomPrime()
        } else {
            props.navigatePage('gameover')

        }
    }

    function clickNo() {
        if (!checkPrime(props.prime)) {
            props.changeScore(props.score + 1)
            showRandomPrime()
        } else {
            props.navigatePage('gameover')
        }
    }

    return (
        <div id="game-container">
            <p>Score: {props.score}</p>
            <p>Time remaining: {timeRem}</p>
            <p>Is this prime?</p>

            <Card text={props.prime} /> 
            <button id="btn-yes" onClick={clickYes}>Yes</button>
            <button id="btn-no" onClick={clickNo}>No</button>
        </div>
    )
}

export default Game
