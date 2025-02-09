import RestaurantCard, {withPrmotedLabel, withPromotedLabel} from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {RESTAURANT_API_LATEST} from "../utils/constants";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://proxy.cors.sh/' + RESTAURANT_API_LATEST,
            {
                headers: {'x-cors-api-key': 'temp_b219aed3fae63b170ca642d51dfd3be6'}
            }
        );
        const dataJson = await data.json();

        setResList(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (false === onlineStatus) return <h1>Looks like you're offline!! Please check your internet connection.</h1>
    return !resList.length ? < Shimmer/> : (
        <div className="app__body">
            <div className="app__filter">

                <div className="app__search m-4 p-4 flex items-center">
                    <input type="text" className="border border-solid border-black" value={searchText}
                           onChange={(e) => {
                               setSearchText(e.target.value);
                           }}/>
                    <button className="px-4 py-1 mx-4 bg-green-300 rounded-lg" onClick={() => {

                        //Filter the restaurant cards and update the UI
                        const filteredResList = resList.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredResList(filteredResList);

                        //search Text
                    }}>Search
                    </button>
                    <button className="px-4 py-1 mx-4 bg-green-300 rounded-lg" onClick={() => {
                        const updateResList = resList.filter((res) => res.info.avgRating >= 4);
                        setResList(updateResList);
                    }}>Top Rated Restaurants
                    </button>
                </div>

            </div>
            <div className="app__res-card-container flex flex-wrap">
                {filteredResList.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>{restaurant.promoted ? <RestaurantCardPromoted
                        resData={restaurant}/> : <RestaurantCardPromoted
                        resData={restaurant}/>}</Link>
                    )
                )}
            </div>

        </div>
    )
}

export default Body;