import {useState} from "react";
import TextField from "./TextField";

function App() {

    const [counts, setCounts] = useState([])

    const addCounter = () => {
        const newCounter = {
            id: Math.random(),
            value: 0
        }
        setCounts([...counts, newCounter])
    }

    const minus = (id) => {
        const updatedCounter =
            counts.map(el =>
                el.id === id ? {...el, value: el.value - 1} : el)
        setCounts(updatedCounter)
    }

    const plus = (id) => {
        const updatedCounter =
            counts.map(el =>
                el.id === id ? {...el, value: el.value + 1} : el)
        setCounts(updatedCounter)
    }
    const delCounter = (id) => {
        const updatedCounter =
            counts.filter(el => el.id !== id)
        setCounts(updatedCounter)
    }

    return (

        <div>
            <button onClick={addCounter}>Add Counter</button>
            <TextField/>
            <hr/>

            <ul>
                {
                    counts.map(el => (
                        <li key={el.id}>
                            <button onClick={() => minus(el.id)}>Minus</button>
                            {el.value}
                            <button onClick={() => plus(el.id)}>Plus</button>

                            <button onClick={() => delCounter(el.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App;