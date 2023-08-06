
import './Card.scss'

function Card(props) {

    return (
        <div className="card">
            <p>{props.text}</p>
        </div>
    )
}

export default Card
