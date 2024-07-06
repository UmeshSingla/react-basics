import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416"
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
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                )}
            </div>

        </div>
    )
}

export default Body;