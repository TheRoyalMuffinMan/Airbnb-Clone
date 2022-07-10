import star from "../img/star.png";

export default function Card(props) {
    let statusText = (props.openSpots) ? "Open" : "Sold Out";
    let statusColor = (props.openSpots) ? "#77dd77" : "#ff9999";
    return (
        <div className="card">
            <div className="status" style={{backgroundColor: statusColor}}>{statusText}</div>
            <img src={require(`../img/${props.img}`)} />
            <div className="card-stats">
                <div className="card-rating">
                    <img src={star} />
                    <h4>{props.rating.toFixed(1)}</h4>
                    <h4 className="card-faded">
                        ({props.reviewCount}) • {props.country}
                    </h4>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    );
}