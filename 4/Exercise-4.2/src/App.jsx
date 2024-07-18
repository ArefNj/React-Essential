import './App.css'
import Card from "./component/Card.jsx";

function App() {
    const cards = [{
        title: 'Card 1',
        content: `Lorem ipsum dolor sit amet consecteturadipisicing elit. Unde
        dignissimos ut iusto quae molestiae odio quod, quas magni quaerat
        impedit maiores optio id dolores delectus praesentium omnis autem
        libero harum?`
    }, {
        title: 'Card 2',
        content: `Lorem ipsum dolor sit amet consecteturadipisicing elit. Unde
        dignissimos ut iusto quae molestiae odio quod, quas magni quaerat
        impedit maiores optio id dolores delectus praesentium omnis autem
        libero harum?`
    }, {
        title: 'Card 3',
        content: `Lorem ipsum dolor sit amet consecteturadipisicing elit. Unde
        dignissimos ut iusto quae molestiae odio quod, quas magni quaerat
        impedit maiores optio id dolores delectus praesentium omnis autem
        libero harum?`
    }]
    return (<div className={"container"}>
        {cards.map((card, index) => {
            return <Card key={index} title={card.title} content={card.content}/>
        })}
    </div>)
}

export default App
