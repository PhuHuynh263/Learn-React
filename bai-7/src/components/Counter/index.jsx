import { useDispatch, useSelector } from "react-redux";
import { up, down, reset } from "../../actions/counter";

function Counter() {
    const counter = useSelector(state => state.counterReducer);
    console.log(counter);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                Counter: {counter}
            </div>
            <button onClick={() => dispatch(up())}>UP</button>
            <button onClick={() => dispatch(down())}>DOWN</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    );
}

export default Counter;