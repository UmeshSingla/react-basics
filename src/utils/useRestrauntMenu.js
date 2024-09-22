import {useEffect, useState} from "react";
import {MENU_API} from "./constants";
const useRestaurantMenu = (resId) => {

    const [resMenuInfo, setResMenuInfo] = useState(null);

    //fetchData
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(
            'https://proxy.cors.sh/' + MENU_API + resId,
            {
                headers: {'x-cors-api-key': 'temp_b219aed3fae63b170ca642d51dfd3be6'}
            }
        );

        const json = await data.json();
        setResMenuInfo(json.data);
    }

    return resMenuInfo;
}

export  default useRestaurantMenu;