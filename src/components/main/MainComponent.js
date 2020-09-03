import React, {useEffect, useState} from "react";
import HeaderComponent from "./header/HeaderComponent";
import ContentComponent from "./content/ContentComponent/ContentComponent";
import FooterComponent from "./footer/FooterComponent";
import {ajax} from 'rxjs/ajax'
import PICTURE from "./resources/Hotel.jpg";
import {shareReplay} from "rxjs/operators";

export const DataContext = React.createContext();
let newOffers = [];

const getOffersFromAPI = () => {
    ajax.get('http://localhost:3333/offers')
        .pipe(
            shareReplay())
        .subscribe(resp => {
            if (resp.status == 200) {
                newOffers = resp.response;
                newOffers.forEach(el => el.picture = PICTURE);
            } else {
                console.log('Error: ' + resp.status);
            }
        });
};

getOffersFromAPI();

export default function MainComponent() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        setOffers(newOffers);
    }, [newOffers]);
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
