import Picture from "../images/n1.jpg"

export default function Card() {
    return (
        <>
            <div className="flex overflow-x-auto">
            <img src={Picture} alt="girl" />
            <img src={Picture} alt="girl" />
            <img src={Picture} alt="girl" />
            <img src={Picture} alt="girl" />
            <img src={Picture} alt="girl" />
            <img src={Picture} alt="girl" />
            </div>
        </>
    )
}