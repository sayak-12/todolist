import {useState} from 'react'
const Counter = () => {
    const [count, setCount] = useState(0); 
    return ( 
        <div className="d-flex">
            <p className="counter h1">{count}</p>
            <button className='btn btn-primary' onClick={ ()=> setCount(count+1)}>Increment</button>
        </div>
     );
}
 
export default Counter;