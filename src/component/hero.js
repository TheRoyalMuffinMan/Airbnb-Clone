import photoGrid from "../img/photo-grid.png";

export default function Hero() {
    return (
        <div className="hero">
            <img src={photoGrid} />
            <div className="hero-text">
                <h1>Online Experieces</h1>
                <p>
                    Join unique interative activities led by one-of-a
                    kind hosts-all without leaving home.
                </p>
            </div>
        </div>
    );
}