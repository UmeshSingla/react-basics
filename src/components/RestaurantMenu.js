 import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
 import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resMenuInfo = useRestaurantMenu(resId);

    if (!resMenuInfo || !resMenuInfo.cards) {
        return (<Shimmer/>);
    }
    console.log(resMenuInfo?.cards[2]?.card?.card?.info);
    const {name, cuisines, costForTwoMessage} = resMenuInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
    const categories = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            {/* Categories Accordion */}
            {categories.map((category) => console.log(category), <RestaurantCategory />)}
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