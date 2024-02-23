import { useState } from "react";
import "./../Styles/counter.css";

const Counter = ({ label, theme }) => {

    const className = `counter-wrapper ${theme}`;
    // let count = 0;
    const [count, setCount] = useState(0);
    const handleDecrease = () => {
        setCount(count - 2);
    };
    const handleIncrease = () => {
        setCount(count + 2);
    };
    const handleUpdate = (e) => {
        const val = Number(e.target.value || 0);
        setCount(val);
    };
    return (
        <div className={className}>
            <h1>Counter {label}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>  {/*IN JS : onclick=handleDecrease()*/}
                {count}
                <input type="number" placeholder="New Value" value={count} onChange={handleUpdate}></input>
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}

export default Counter;

/*
// Concept used object destructuring
const Counter = (props) => {
    //console.log(props);
    const { label, theme } = props;
    const className = `counter-wrapper ${props.theme}`;
    return (
        <div className={className}>
            <h1>Counter {props.label}</h1>
             <button onClick={handleDecrease}>-</button> \\IN JS : onclick=handleDecrease()
        </div>
    )
}

 */