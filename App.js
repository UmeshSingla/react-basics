import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Components: AppLayout
 *  Header
 *      - Logo
 *      - Search Bar
 *      - Cart
 *  Body
 *      - RestaurantContainer
 *          - Card
 *              - Image
 *              - Name, Rating
 *              - Cuisines
 *              - Delivery Time
 *
 *  Footer
 *      - Copyright
 *      - Links
 *      - Contact
 *
 */

const Header = () => {
    return (
        <div className="app__header">
            <div className="app__logo">
                <img src="https://assets.grab.com/wp-content/uploads/media/grab_logo.png" alt="Grab - Food Delivery"/>
            </div>
            <div className="app__nav">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

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
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={ name + cuisines} />
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

const resData = [
        {
            "info": {
                "id": "765152",
                "name": "Pizza Hut",
                "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
                "locality": "Pimpri chinchwad",
                "areaName": "Punawale",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4,
                "parentId": "721",
                "avgRatingString": "4.0",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-07 05:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-pimpri-chinchwad-punawale-pune-765152",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "611808",
                "name": "UBQ by Barbeque Nation",
                "cloudinaryImageId": "noc7ieivirqxtpujhsgl",
                "locality": "1st Phase",
                "areaName": "Hinjawadi",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Barbecue",
                    "Biryani",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                ],
                "avgRating": 4,
                "parentId": "10804",
                "avgRatingString": "4.0",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 45,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-06 23:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-1st-phase-hinjawadi-pune-611808",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "260823",
                "name": "La Pino'z Pizza",
                "cloudinaryImageId": "hfwa38io1akqusshdyug",
                "locality": "Wakad",
                "areaName": "Wakad",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "4961",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 5.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "5.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-06 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-wakad-pune-260823",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "611807",
                "name": "Barbeque Nation",
                "cloudinaryImageId": "iydxtay1mnne2ktw7txe",
                "locality": "Global Highstreet Mall",
                "areaName": "Hinjawadi",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "North Indian",
                    "Barbecue",
                    "Biryani",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                ],
                "avgRating": 3.8,
                "parentId": "2438",
                "avgRatingString": "3.8",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 49,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-06 23:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/barbeque-nation-global-highstreet-mall-hinjawadi-pune-611807",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "759076",
                "name": "The Belgian Waffle Co.",
                "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                "locality": "V J HAPPINESS STREET",
                "areaName": "HINJEWADI",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Waffle",
                    "Desserts",
                    "Ice Cream"
                ],
                "avgRating": 4.5,
                "veg": true,
                "parentId": "2233",
                "avgRatingString": "4.5",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-07 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                        },
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-v-j-happiness-street-hinjewadi-pune-759076",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "323526",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Chinchwad",
                "areaName": "Chinchwad",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 3.9,
                "parentId": "517122",
                "avgRatingString": "3.9",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 45,
                    "lastMileTravel": 8.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "8.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-06 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹169"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/chinese-wok-chinchwad-pune-323526",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "752535",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5d0c595a-dfb2-472b-8ca0-f4701adaa38d_752535.JPG",
                "locality": "Dattwadi",
                "areaName": "Puna wale",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.1,
                "parentId": "547",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-06 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹179"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-dattwadi-puna-wale-pune-752535",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "839126",
                "name": "Ramdev Pure Veg",
                "cloudinaryImageId": "53aa76734ecf3ab065ba3d65957cee0c",
                "locality": "Hinjewadi",
                "areaName": "Hinjewadi",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Indian"
                ],
                "avgRating": 4,
                "parentId": "166551",
                "avgRatingString": "4.0",
                "totalRatingsString": "10+",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-06 16:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ramdev-pure-veg-hinjewadi-pune-839126",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "772299",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/49774730-6b2a-4bee-ac6e-aa98dc47a584_772299.jpg",
                "locality": "W Biz",
                "areaName": "Wakad",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "630",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 4.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-06-06 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-7e321921-8d90-4456-8378-c94f4fff7bc0"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-w-biz-wakad-pune-772299",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ];
const Body = () => {
    return (
        <div className="app__body">
            <div className="app__search">
                <input className="app__search-input" type="text" name="search-input" value="" placeholder="Search for restaurants and food"/>
            </div>
            <div className="app__res-card-container">
                {resData.map( (restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                )}
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container__root'));

root.render(<AppLayout />)