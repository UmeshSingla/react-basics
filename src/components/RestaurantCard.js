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
        <div key={resData?.info?.id} className="m-4 p-4 w-52 bg-gray-100 rounded-lg hover:bg-gray-200">
            <div className="res-card__header">
                <img src={ CDN_URL + cloudinaryImageId} alt={ name + cuisines} />
                <div className="res__offer"></div>
            </div>
            <div className="my-4">
                <h3 className="font-bold text-lg">{name}</h3>
                <div className="res__meta">
                    <div className="res__rating">{avgRatingString}</div>
                    <div className="res__delivery-time">{sla.slaString}</div>
                </div>
                <div className="res__cuisine">{cuisines.join(", ")}</div>
            </div>
        </div>
    );
}

//Higher Order Component - If a restaurant is promoted add a Promoted label to it.
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;