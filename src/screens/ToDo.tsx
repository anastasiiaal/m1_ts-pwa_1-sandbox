import { useState } from "react"

type Task = {
    text: string;
    done: boolean;
};

export default function ToDo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    function addTask(event: React.FormEvent) :void {
        event?.preventDefault();
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, done: false }]);
        }
        setNewTask("")
    }

    function toggleTask(index : number) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        );
        setTasks(updatedTasks);
    }

    function deleteTask(index: number) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <>
            <h3>ToDo list:</h3>
            <form onSubmit={addTask}>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        value={newTask} 
                        className="form-control"
                        onChange={(e) => setNewTask(e.target.value)} 
                        placeholder="Enter a task"
                    />
                    <button type="submit" className="btn btn-primary">+</button>
                </div>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <li 
                        key={index} 
                        className="form-check list-group-item d-flex align-items-center justify-content-between"
                    >
                        <div className="">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={task.done}
                                onChange={() => toggleTask(index)}
                            />
                            <label className={`form-check-label ${task.done ? "text-decoration-line-through text-secondary" : ""}`}>
                                {task.text}
                            </label>
                        </div>
                        <button onClick={() => deleteTask(index)} className={`btn ${!task.done ? "btn-secondary" : "btn-danger"}`} disabled={!task.done}>✕</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
