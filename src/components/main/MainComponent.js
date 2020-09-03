import React, {useEffect, useState} from "react";
import HeaderComponent from "./header/HeaderComponent";
import ContentComponent from "./content/ContentComponent/ContentComponent";
import FooterComponent from "./footer/FooterComponent";
import {ajax} from 'rxjs/ajax'
import PICTURE from "./resources/Hotel.jpg";
import {shareReplay} from "rxjs/operators";

export const DataContext = React.createContext();
// let newOffers = [];

// const getOffersFromAPI = () => {
//     ajax.get('http://localhost:3333/offers')
//         .pipe(
//             shareReplay())
//         .subscribe(resp => {
//             if (resp.status == 200) {
//                 newOffers = resp.response;
//                 newOffers.forEach(el => el.picture = PICTURE);
//             } else {
//                 console.log('Error: ' + resp.status);
//             }
//         });
// };
//
// getOffersFromAPI();

const offers = [
    {"id": 1, "title": "Awesome Plaza Hotel", "picture": "./resources/Hotel.jpg", "enter_time": "03/09/2020, 12:00:00", "exit_time": "07/09/2020, 09:00:00", "rate": 4, "price": "8000$"},
    {"id": 2, "title": "Awesome Plaza Hotel", "picture": "./resources/Hotel.jpg", "enter_time": "04/09/2020, 12:00:00", "exit_time": "07/09/2020, 09:00:00", "rate": 3, "price": "5000$"},
    {"id": 3, "title": "Awesome Plaza Hotel", "picture": "./resources/Hotel.jpg", "enter_time": "09/09/2020, 12:00:00", "exit_time": "11/09/2020, 09:00:00", "rate": 5, "price": "15000$"},
    {"id": 4, "title": "Awesome Plaza Hotel", "picture": "./resources/Hotel.jpg", "enter_time": "15/09/2020, 12:00:00", "exit_time": "17/09/2020, 09:00:00", "rate": 2, "price": "3000$"},
    {"id": 5, "title": "Awesome Plaza Hotel", "picture": "./resources/Hotel.jpg", "enter_time": "08/09/2020, 12:00:00", "exit_time": "09/09/2020, 09:00:00", "rate": 1, "price": "FREE"},
    {"id": 6, "title": "Awesome Plaza Hotel", "picture": "./resources/Hotel.jpg", "enter_time": "03/09/2020, 12:00:00", "exit_time": "07/09/2020, 09:00:00", "rate": 4, "price": "8000$"}
]

export default function MainComponent() {
    // const [offers, setOffers] = useState([]);
    //
    // useEffect(() => {
    //     setOffers(newOffers);
    // }, [newOffers]);
    return (
        <DataContext.Provider value={offers}>
            <div>
                <HeaderComponent/>
                <ContentComponent/>
                <FooterComponent/>
            </div>
        </DataContext.Provider>
    )
}
