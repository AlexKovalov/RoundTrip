import React from "react";
import './CardComponent.css';

const ENTER_TIME_TEXT = 'יציאה: ';
const EXIT_TIME_TEXT = 'חזרה: ';
const ALL_NIGHTS_TEXT = 'ארבעה לילות|חדר בלבד';
const PRICE_TEXT = 'הצטרפו למועדון הלקוחות שלנו';
const PRICE_BTN_TEXT = 'פרטים נוספים';

export default function CardComponent(props) {
    return (
        <div className="row mb-1 myCard">
            <div className="card col-sm-12 col-md-12 col-lg-2 priceCardBox">
                    <div className="">
                        <h5>{props.data.price}</h5>
                        <p>{PRICE_TEXT}</p>
                    </div>
                    <div className="">
                        <button type="button" className="btn btn-danger btn-sm mb-1 buttonCard">{PRICE_BTN_TEXT}</button>
                    </div>
            </div>

            <div className="card  myCard flexRow col-sm-12 col-md-12 col-lg-7 p-0 descCardBox">
                <div className="d-flex col-12 pl-2 pr-2 mediaDescBox">

                    <div className="descCardBox2">
                        <button type="button" className="btn btn-primary btn-sm buttonCard mb-1">הצג חבילות נוספות למלון זה</button>
                    </div>
                    <div className="descCardBox1">
                        <h5 className="card-title descCardTitle">{props.data.title}</h5>
                        <div>
                            <span className="fa fa-star checked m-1"></span>
                            <span className="fa fa-star checked m-1"></span>
                            <span className="fa fa-star checked m-1"></span>
                            <span className="fa fa-star m-1"></span>
                        </div>
                        <p className="card-text descCardText">{ENTER_TIME_TEXT + props.data.enter_time}</p>
                        <p className="card-text descCardText">{EXIT_TIME_TEXT + props.data.exit_time}</p>
                        <p className="card-text descCardText">{ALL_NIGHTS_TEXT}</p>
                    </div>
                </div>
            </div>

            <div className="card myCard flexRow col-sm-12 col-md-12 col-lg-2 p-0 imageCardBox">
                    <img src={props.data.picture} className="card-img" alt="..."/>
            </div>


        </div>
    )
}
