import React from "react";
import "./FilterComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faWallet,
    faCoins,
    faHandHoldingUsd
} from "@fortawesome/free-solid-svg-icons";

export default function FilterComponent() {
    let MOST_POPULAR_TEXT = 'הכי פופולרי';
    let MOST_CHEAP_TEXT = 'הכי זול';
    let MOST_PROFIT_TEXT = 'הכי משתלם';
    let SELECT_TEXT = ':מיין לפי';
    let SELECT_OPTION_TEXT = 'מחיר,מהמוך לגבוה';
    return (
        <div className="filterBox container">
            <div className="btnBox col-md-7 col-lg-7">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => {}}>
                    <div className="flexRow"><div className="pR5px">{MOST_CHEAP_TEXT}</div><FontAwesomeIcon icon={faHandHoldingUsd}/></div>
                </button>
                <button type="button" className="btn invisibleBtn btn-sm" onClick={() => {}}>
                    <div className="flexRow"><div className="pR5px">{MOST_POPULAR_TEXT}</div><FontAwesomeIcon icon={faCoins}/></div>
                </button>
                <button type="button" className="btn invisibleBtn btn-sm" onClick={() => {}}>
                    <div className="flexRow"><div className="pR5px">{MOST_PROFIT_TEXT}</div><FontAwesomeIcon icon={faWallet}/></div>
                </button>
            </div>
            <div className="selectBox col-md-5   col-lg-5">
                <div className="defaultFontFilter">{SELECT_TEXT}</div>
                <div className="ml-1 mr-1 cursorPointer">
                    <select className="form-control form-control-sm transparentInput defaultFontFilter">
                        <option>{SELECT_OPTION_TEXT}</option>
                        <option>{SELECT_OPTION_TEXT}</option>
                        <option>{SELECT_OPTION_TEXT}</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
