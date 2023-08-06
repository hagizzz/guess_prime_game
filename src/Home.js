import './Home.scss';

function Home(props) {
    function playGuessPrime() {
        props.navigatePage('game')
    }

    return (
        <div id="home-container">
            <h1>Gamevui</h1>
            <button onClick={playGuessPrime}>Guess Prime</button>
        </div>
    )
        
}

export default Home;