import { useState, useReducer } from "react";

function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
    function reducer(state, action) {
        if (action.type === "increment") {
            return { ...state, count: state.count + state.incrementBy }; //state + action.payload;
        }
        if (action.type === "decrement") {
            return { ...state, count: state.count - state.incrementBy }; //state - action.payload;
        }
        if (action.type === "setIncrement") {
            return { ...state, incrementBy: action.payload }; //state - action.payload;
        }
    }
    return (
        <div>
            {state.count}
            <input
                value={state.incrementBy}
                onChange={(e) =>
                    dispatch({
                        type: "setIncrement",
                        payload: Number(e.target.value),
                    })
                }
            />
            <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
                Increment count
            </button>
            <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
                Decrement count
            </button>
        </div>
    );
}

export default App;
