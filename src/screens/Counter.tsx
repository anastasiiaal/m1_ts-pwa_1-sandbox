import { useState } from "react";
import Button from "../components/Button"

export default function Counter () {
    const [counter, setCounter] = useState<number>(0);

    function decrement() : void {
        setCounter(counter - 1);
    }

    function increment() : void {
        setCounter(counter + 1);
    }
    return (
        <div className="d-flex align-items-center">
            <Button
                title="-"
                onPress={decrement}
            />
            <p className="m-0 ms-4 me-4">
                {counter} ({ (counter % 2 === 0) ? "c'est pair" : "c'est impair" })
            </p>
            <Button
                title="+"
                onPress={increment}
            />
        </div>
    )
}