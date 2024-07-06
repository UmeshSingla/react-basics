import {CDN_URL} from "../utils/constants"
const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRatingString,
        sla
    } = resData?.info;
    return (
        <div className="res-card">
            <div className="res-card__header">
                <img src={ CDN_URL + cloudinaryImageId} alt={ name + cuisines} />
                <div className="res__offer"></div>
            </div>
            <div className="res-card__body">
                <h3>{name}</h3>
                <div className="res__meta">
                    <div className="res__rating">{avgRatingString}</div>
                    <div className="res__delivery-time">{sla.slaString}</div>
                </div>
                <div className="res__cuisine">{cuisines.join(", ")}</div>
            </div>
        </div>
    );
}

export default RestaurantCard;