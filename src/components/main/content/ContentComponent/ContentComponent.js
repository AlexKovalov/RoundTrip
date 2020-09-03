import React from "react";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import "./ContentComponent.css"
import SearchComponent from "../SearchComponent/SearchComponent";
import FilterComponent from "../FilterComponent/FilterComponent";

const FULL_NAME_PLACEHOLDER = 'שם מלא';
const EMAIL_PLACEHOLDER = 'דואר אלקטרוני';
const REGISTRATION_BTN_TEXT = 'הרשם';

export default function ContentComponent() {

    return (
        <div className="mainContentBox">
            <div className="contentBox">
                <div className="col-md-8 col-lg-8 p-0 m-0">
                    <FilterComponent/>
                    <ContainerComponent/>
                </div>

                <div className="col-md-4 col-lg-3 p-0 m-0">
                    <SearchComponent/>
                </div>
            </div>

            <div className="contactUsBox">
                <div className="contactUsTitle">
                    <h5>הצטרפו למועדון הלקוחות שלנו</h5>
                </div>

                <div className="form-group contactUsForm flex-row-reverse m-0 p-0 col-12">
                    <input type="text" className="form-control form-control-lg mr-1 ml-1 col-md-4 col-sm-12"
                           id="fullNameInput"
                           placeholder={FULL_NAME_PLACEHOLDER}/>

                    <input type="email" className="form-control form-control-lg mr-1 ml-1 col-md-4 col-sm-12"
                           id="emailInput"
                           placeholder={EMAIL_PLACEHOLDER}/>
                    <button type="button" className="btn btn-danger btn-lg mr-1 ml-1 col-md-4 col-sm-12" onSubmit={()=>{}}>{REGISTRATION_BTN_TEXT}</button>
                </div>
            </div>
        </div>
    )
}
