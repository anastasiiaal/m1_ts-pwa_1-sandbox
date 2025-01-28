import { useState } from "react"
import Button from "../components/Button"

export default function ToDo () {
    const [tasks, setTasks] = useState([])
    function addTask() {

    }

    return (
        <>
            <h3>ToDo list:</h3>
            <input 
                type="text" 
            />
            <Button title="+" onPress={addTask} />
        </>
    )
}