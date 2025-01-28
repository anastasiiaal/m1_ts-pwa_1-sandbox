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
            <h3>Ceci est une agenda</h3>
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