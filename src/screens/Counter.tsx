import { useEffect, useState } from "react";
import Button from "../components/Button"

export default function Counter () {
    const [counter, setCounter] = useState<number>(0);
    const [squaredCounter, setSquaredCounter] = useState<number>(0);

    useEffect(() => {
        setSquaredCounter(counter * counter)
    }, [counter])

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
            <div className="m-0 ms-4 me-4">
                <p className="text-center m-0">
                    {counter}
                </p>
                <p className="text-center m-0">
                    { (counter % 2 === 0) ? "C'est un nombre pair" : "C'est un nombre impair" }
                </p>
                <p className="text-center m-0">Au carré c'est {squaredCounter}</p>
            </div>
            <Button
                title="+"
                onPress={increment}
            />
        </div>
    )
}