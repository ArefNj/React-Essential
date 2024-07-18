import './App.css'
import Card from "./component/Card.jsx";

function App() {
    const cards = [
        {title: 'Card 1', content: 'Hello. this is card 1'},
        {title: 'Card 2', content: 'Hello. this is card 2'},
        {title: 'Card 3', content: 'Hello. this is card 3'},
    ]
    return (
        <div>
            {cards.map((card, index) => {
                return <Card key={index} title={card.title} content={card.content}/>
            })}
        </div>
    )
}

export default App
