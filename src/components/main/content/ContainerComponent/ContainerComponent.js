import React, {useContext} from "react";
import CardComponent from "../CardComponent/CardComponent";
import "./ContainerComponent.css"
import {DataContext} from "../../MainComponent";


export default function ContainerComponent() {
    const elements = useContext(DataContext);
    const POSITION_AMOUNT_TEXT = 'סהייכ נמצאו ' + elements.length + ' תוצאות';

    return (
        <div>
            <div className="container cardContainer">
                <div className="container positionAmount">{POSITION_AMOUNT_TEXT}</div>
                {
                    elements.map((el, index)=>{
                        return <CardComponent data={el} key={index}/>
                    })
                }
            </div>
        </div>
    )
}
