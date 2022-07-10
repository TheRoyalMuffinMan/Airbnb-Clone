import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Card from "./component/card";
import data from "./data";

export default function App() {
    const cards = data.map(entry => {
        return (<Card
            img={entry.coverImg}
            rating={entry.stats.rating}
            reviewCount={entry.stats.reviewCount}
            country={entry.location}
            title={entry.title}
            price={entry.price}
            openSpots={entry.openSpots}
        />)
    });
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="cards">
                {cards}
            </div>
        </div>
    );
}