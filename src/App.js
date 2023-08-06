
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home'
import Game from './Game'
import Gameover from './Gameover'

function App() {
    const [score, setScore] = useState(0)
    const [prime, setPrime] = useState(13)
    const [check, setCheck] = useState(true)

    function handleScoreChange(value) {
        setScore(value)
    }

    function handlePrimeChange(value) {
        setPrime(value)
    }

    function navigatePage(pathName) {
        window.history.pushState(null, "", `/${pathName}`)
        setCheck(check => !check)
    }

    function Page() {
        let pageName = window.location.pathname

        if (pageName === '/') {
            return <Home score={score} prime={prime} changePrime={handlePrimeChange} changeScore={handleScoreChange} navigatePage={navigatePage} />
        }
        if (pageName === '/game') {
            return <Game score={score} prime={prime} changePrime={handlePrimeChange} changeScore={handleScoreChange} navigatePage={navigatePage} />
        }
        if (pageName === '/gameover') {
            return <Gameover score={score} prime={prime} changePrime={handlePrimeChange} changeScore={handleScoreChange} navigatePage={navigatePage} />
        }

        return <div>Page not found</div>
    }

    return Page()
}

export default App;
