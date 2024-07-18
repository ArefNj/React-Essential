import "./App.css";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const [value, setValue] = useState(0)

    function addNum() {
        setValue(value + 1);
    }

    function removeNum() {
        setValue(value - 1);
    }

    return (
        <div>
            <div className={"container"}>
                <Button onClick={addNum}>+</Button>
                <h3>{value}</h3>
                <Button onClick={removeNum}>-</Button>
            </div>
        </div>);
}

export default App;
