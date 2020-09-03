import React from "react";

export default function RateInputComponent(props) {
    const element = props.data.el;
    const AMOUNT_OF_STARS = props.data.amount_of_stars;
    const arr = new Array(AMOUNT_OF_STARS).fill('');
    arr.fill('checked', arr.length - element.rate);
    return (
        <div className="myStarInputBox">
            <div className="">{element.price}</div>
            {arr.map((element, index) => {
                return <div className={"fa fa-star m-0 " + element} key={index}></div>
            })}
            <div className="marginL2VW">
                <input className="form-check-input" type="radio"
                       defaultChecked={false} onClick={element.onClick}/>
            </div>
        </div>
    )
}
