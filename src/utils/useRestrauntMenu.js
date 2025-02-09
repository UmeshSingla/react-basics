import {useEffect, useState} from "react";
import {MENU_API_LATEST} from "./constants";
const useRestaurantMenu = (resId) => {

    const [resMenuInfo, setResMenuInfo] = useState(null);

    //fetchData
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(
            'https://proxy.cors.sh/' + MENU_API_LATEST + resId,
            {
                headers: {'x-cors-api-key': 'temp_d89776b2c7851d5c1bd83dbb3f613aa7'}
            }
        );

        const json = await data.json();
        setResMenuInfo(json.data);
    }

    return resMenuInfo;
}

export  default useRestaurantMenu;