import React from "react";
import './SearchComponent.css'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RateInputComponent from "../../shared/RateInputComponent/RateInputComponent";


const FILTER_TITLE_TEXT = 'סינון תוצאות';
const HOTEL_RATING = 'דירוג מלון';
const PRICE_RANGE_TEXT = 'טווח מחיר לאוד';
const BASE_OPTIONS_TEXT = 'בסיס אירוח';
const BASE_OPTIONS_TEXT2 = 'לינה';
const BASE_OPTIONS_TEXT3 = 'ארוחת בוקר';
const INPUT_PLACEHOLDER = 'חיפוש לפי שם מלון';
const PRICE_TEXT = '819 $';
const PRICE_TEXT2 = '4000 $';

const markRate = () => {
    console.log('Mark Rate');
};

const elements = [
    {id:1, price: '300 $', rate: 1, onClick: markRate},
    {id:2, price: '500 $', rate: 2, onClick: markRate},
    {id:2, price: '550 $', rate: 3, onClick: markRate},
    {id:2, price: '750 $', rate: 4, onClick: markRate},
    {id:2, price: '819 $', rate: 5, onClick: markRate},
];

export default function SearchComponent() {

    return (
        <div className="mySearchCard defaultFontSearch">
            <h5 className="rightText searchTitle">{FILTER_TITLE_TEXT}</h5>
            <div className="whiteLine"></div>
            <div className="container searchContainer">
                <form>
                    <div className="whiteLine">
                        <h5 className="rightText">{HOTEL_RATING}</h5>
                        {elements.map((el, index)=>{
                            return <RateInputComponent data={{el, amount_of_stars: 5}} key={index}/>
                        })}
                    </div>

                    <div className="form-group whiteLine">
                        <h5 className="rightText">{PRICE_RANGE_TEXT}</h5>
                        <div className="priceRangeSearchBox">
                            <div className="priceRangeTitleBox">
                                <div>{PRICE_TEXT}</div>
                                <div>{PRICE_TEXT2}</div>
                            </div>
                            <input type="range" className="form-control-range"/>

                        </div>

                    </div>
                    <div className="whiteLine">
                        <h5 className="rightText">{BASE_OPTIONS_TEXT}</h5>
                        <div className="myInput">
                            <div className="">{PRICE_TEXT}</div>
                            <div className="inputBox">
                                <div className="marginR2VW">{BASE_OPTIONS_TEXT2}</div>
                                <input className="form-check-input" type="radio" name="baseOptionsInput"
                                       defaultChecked={true}/>
                            </div>
                        </div>

                        <div className="myInput">
                            <div className="">{PRICE_TEXT}</div>
                            <div className="inputBox">
                                <div className="marginR2VW">{BASE_OPTIONS_TEXT3}</div>
                                <input className="form-check-input" type="radio" name="baseOptionsInput"
                                       defaultChecked={true}/>
                            </div>
                        </div>
                    </div>

                    <div className="input-group form-group mt-2">
                        <div className="input-group-prepend">
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} className=""></FontAwesomeIcon>
                    </span>
                        </div>
                        <input type="text" className="form-control" placeholder={INPUT_PLACEHOLDER}  id="findByNameInput"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
