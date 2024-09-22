import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resMenuInfo = useRestaurantMenu(resId);

    if (!resMenuInfo || !resMenuInfo.cards) {
        return (<Shimmer/>);
    }
    const {name, cuisines, costForTwoMessage} = resMenuInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <h3>Menu</h3>
            <div>
                { itemCards.map(({card}) => {
                    return(
                        <div>
                            <h4>{card?.info?.name}</h4>
                            <ul>
                                { itemCards.map( ({card}) => {
                                    return (
                                        <li key={card?.info?.id}>
                                            {card?.info?.name} - {" Rs. "}
                                            {card?.info?.price / 100 || card?.info?.defaultPrice / 100  }
                                        </li>
                                    );
                                } ) }
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default RestaurantMenu;