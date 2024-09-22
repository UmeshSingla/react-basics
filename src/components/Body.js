import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416',
            {
                headers: {'x-cors-api-key': 'temp_b219aed3fae63b170ca642d51dfd3be6'}
            }
        );
        const dataJson = await data.json();

        setResList(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return !resList.length ? < Shimmer /> : (
        <div className="app__body">
            <div className="app__filter">

                <div className="app__search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText( e.target.value);
                    }}/>
                    <button onClick={ () => {

                        //Filter the restaurant cards and update the UI
                        const filteredResList = resList.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredResList(filteredResList);

                        //search Text
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const updateResList = resList.filter( (res) => res.info.avgRating >= 4 );
                    setResList(updateResList);
                }}>Top Rated Restaurants</button>

            </div>
            <div className="app__res-card-container">
                {filteredResList.map( (restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id }><RestaurantCard resData={restaurant} /></Link>
                    )
                )}
            </div>

        </div>
    )
}

export default Body;