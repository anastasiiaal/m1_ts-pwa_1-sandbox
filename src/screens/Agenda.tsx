const WEEKDAYS = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
]

export default function Agenda () {
    const currentDay: number = new Date().getUTCDay();
    
    return (
        <>
            <ul>
                {WEEKDAYS.map((day, idx)=> (
                    <li 
                        key={idx} 
                        className={currentDay === idx + 1 ? "fw-bold" : ""}
                    >
                        {day}
                    </li>
                ))}
            </ul>
        </>
    )
}