import React from "react";
import Img from "../img/Img";
function GTScore() {
    const medalsData = [
        { src: './assets/images/gold-medal.svg', alt: 'illustration of gold medal', count: '01' },
        { src: './assets/images/silver-medal.svg', alt: 'illustration of silver medal', count: '03' },
        { src: './assets/images/bronze-medal.svg', alt: 'illustration of bronze medal', count: '06' },
    ];
    return (
        <div className="gt-score">
            <div className="score">
                <h2>1534</h2>
                <p>GT Score</p>
            </div>
            <div className="medals">
                {medalsData.map((medal, index) => (
                    <div className="medals__item" key={index}>
                        <Img className="medals__image" src={medal.src} alt={medal.alt} />
                        <p className="medals__count">{medal.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default GTScore;