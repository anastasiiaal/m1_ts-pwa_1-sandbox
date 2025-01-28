import Button from "../components/Button"

export default function ButtonsTest () {
    return (
        <>
            <Button 
                title="First" 
                className={"btn btn-warning"}
                onPress={() => alert(`Le bouton a été cliqué`)}
            />
            <Button 
                title="Second" 
            />
            <Button />
        </>
    )
}