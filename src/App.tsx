import React, {useState} from 'react';
import './App.css';


type ObjectPropsType = {
    id: number
    color: string
    text: string
}

const arrayObject = [
    {id: 1, color: "red", text: "text 1"},
    {id: 2, color: "green", text: "text 2"},
    {id: 3, color: "orange", text: "text 3"},
    {id: 4, color: "blue", text: "text 4"},
]

function App() {

    const [arr, setArr] = useState(arrayObject);

    const deleteText = (item: ObjectPropsType) => {
        let res = arr.filter(el => el.id !== item.id);
        setArr([...res]);
    }

    return (
        <div className="App">
            <header className="App-header">
                {arr.map(el => (
                    <span key={el.id} style={{color: el.color}} onClick={()=> deleteText(el)}>{el.text}</span>
                ))}
            </header>
        </div>
    );
}

export default App;
