import Child from "./Child";
import { useState } from "react";

export default function Parent() {
    const [parentCount, setParentCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    function changeParentCount() {
        setParentCount(parentCount + 1);
    }
    function changeChildCount() {
        setChildCount(childCount + 1);
    }
    return (
        <div>
            This is a Parent Component
            <h1>Parent count is {parentCount} </h1>
            <Child count={childCount} />
            <button onClick={changeParentCount}>Increment parent count</button>
            <button onClick={changeChildCount}>Increment child count</button>
        </div>
    );
}
