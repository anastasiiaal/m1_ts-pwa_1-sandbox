import { useState, useEffect } from "react";

interface Record {
    name: string
    time: number
}

export default function Typer() {
    const [isStarted, setIsStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [name, setName] = useState("");
    const [textAreaValue, setTextAreaValue] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const targetText = "Lorem ipsum dolor sit amet consectetur";

    useEffect(() => {
        let interval: number;
        if (isStarted && !isCompleted) {
            interval = setInterval(() => {
                setTimer((prevTimer) => parseFloat((prevTimer + 0.01).toFixed(2)));
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isStarted, isCompleted]);

    const handleStart = () => {
        setIsStarted(true);
        setTimer(0);
        setIsCompleted(false);
        setTextAreaValue("");
    };

    const handleTextChange = (value: string) => {
        setTextAreaValue(value);
        if (value === targetText) {
            setIsCompleted(true);
            setIsStarted(false);

            // Retrieve prev records from local storage (if exist)
            const existingRecords = JSON.parse(localStorage.getItem("typingRecords") || "[]");

            const newRecord = {
                name,
                time: timer,
            };

            const updatedRecords = [...existingRecords, newRecord];

            localStorage.setItem("typingRecords", JSON.stringify(updatedRecords));
        }
    };

    const getRanking = () => {
        const records = JSON.parse(localStorage.getItem("typingRecords") || "[]");
        return records.sort((a: Record, b: Record) => a.time - b.time);
    };



    return (
        <div className="container mt-5">
            {!isStarted && !isCompleted ? (
                <>
                    <h3 className="mb-3 text-center">Typer</h3>
                    <form className="input-group" onSubmit={handleStart}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={!name.trim()} 
                        >
                            GO
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <h3>Typing Test</h3>
                    <p className="fw-bold">Timer: {timer}s</p>
                    <p className="mb-3">{targetText}</p>
                    <textarea
                        className="form-control mb-3"
                        rows={4}
                        placeholder="Type the text above here..."
                        value={textAreaValue}
                        onChange={(e) => handleTextChange(e.target.value)}
                        disabled={isCompleted}
                    />
                    {isCompleted && (
                        <div className="text-center">
                            <div className="alert alert-success">
                                Well done, {name}! Your time: {timer}s.
                            </div>
                            <h5>Leaderboard:</h5>
                            <ul className="list-group mb-3">
                                {getRanking().map((record: Record, index: number) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between">
                                        <span>{record.name}</span>
                                        <span>{record.time}s</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="btn btn-secondary mt-3"
                                onClick={() => {
                                    setIsCompleted(false);
                                    setIsStarted(false);
                                    setTextAreaValue("");
                                    setTimer(0);
                                }}
                            >
                                Back to start
                            </button>
                        </div>
                    )}

                </>
            )}
        </div>
    );
}
