
import { useState } from "react"
import Card from './Card'

function Page() {
    const [showCard, setShowcard] = useState(true)

    function triggerCard() {
        setShowcard(val => !val)
    }

    return (
        <div>
            <button onClick={triggerCard}>Trigger card</button>
            {showCard ? <Card text="Hello" /> : <div>no card here</div>}
        </div>
    )
}

export default Page
