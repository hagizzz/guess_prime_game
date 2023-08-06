import './Gameover.scss';

function factorize(n) {
    let p = 2
    let arr = []
    while (n !== 1) {
        if (n % p === 0){
            n = n/p
            arr.push(p)
        }
        else p += 1
    }
    return arr
}

function factorizeFormat(n) {
    let arr = factorize(n)
    let result = []
    let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            count+=1
        }
        else if (count > 1) {
            result.push(
                <span>{arr[i]} <sup>{count}</sup></span>
            )
            count = 1
        }
        else {
            result.push(<span>{arr[i]}</span>)
        }
        if (i < arr.length-1 && count === 1) {
            result.push(<span className='multiply-symbol'>x</span>)
        }
    }
    return result
}

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

function Gameover(props) {
    function clickStartAgain() {
        props.changeScore(0)
        props.navigatePage('guessprime')
    }

    function PrimeResult() {
        if (checkPrime(props.prime)) return <p>{props.prime} is prime</p>
        else return <p>{props.prime} = {factorizeFormat(props.prime)} </p>
    }
    
    return (
        <div id="gameover-container">
            <p>Game over! <br /> <br /> Your score is {props.score}</p> 
            <PrimeResult />
            <button onClick={clickStartAgain}>Start again</button> <br /> <br />
        </div>
    )
}

export default Gameover
