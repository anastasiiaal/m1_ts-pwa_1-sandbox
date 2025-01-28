interface ButtonProps {
    title?: string 
    className?: string | null
    onPress?: React.MouseEventHandler
}

export default function Button (props: ButtonProps) {
    // function onPress () : void {
    //     alert("Le bouton a été cliqué")
    // }

    return (
        <button 
            className={props.className ?? "btn btn-primary"}
            onClick={props.onPress}
        >
            {props.title || "Default"}
        </button>
    )
}