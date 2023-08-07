
import { useEffect, useState } from 'react';
import './App.css';
import Game from './pages/Game'
import Gameover from './pages/Gameover'

function App() {
    const [score, setScore] = useState(0)
    const [prime, setPrime] = useState(13)
    const [check, setCheck] = useState(true)

    useEffect(() => {
        setRandomPrime()
    }, [])

    function handleScoreChange(value) {
        if (value === 0) {
            setRandomPrime()
        }
        setScore(value)
    }

    function navigatePage(pathName) {
        window.history.pushState(null, "", `/${pathName}`)
        setCheck(check => !check)
    }

    function randInt(min, max) {
        return Math.floor(Math.random()*(max - min + 1)) + min
    }

    function setRandomPrime() {
        setPrime(randInt(1,100))
    }

    function Page() {
        let pageName = window.location.pathname
        if (pageName === '/') {
            return <Game score={score} prime={prime} setRandomPrime={setRandomPrime} changeScore={handleScoreChange} navigatePage={navigatePage} />
        }
        if (pageName === '/gameover') {
            return <Gameover score={score} prime={prime} changeScore={handleScoreChange} navigatePage={navigatePage} />
        }

        return <div>Page not found</div>
    }

    return <Page />
}

export default App;
