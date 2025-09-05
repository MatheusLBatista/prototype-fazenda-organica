import './style.css';

interface Card {
    heading: string,
    paragraph: string,
    backgroundImage: string
}

export default function Card({ heading, paragraph, backgroundImage }: Card) {

    return (
        <div>
            <h1 className="card-heading" style={{ backgroundImage: `url(${backgroundImage})` }}>{heading}</h1>
            <p className="card-paragraph">
                {paragraph}
            </p>
            <div className="card-link"><a href="#">Saiba mais</a></div>
        </div>
    )
}