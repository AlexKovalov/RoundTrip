import React from "react";
import "./FooterComponent.css"
import ListComponent from "../shared/ListComponent/ListComponent";
import SocialFollowComponent from "../content/SocialFollow Component/SocialFollowComponent";

const FIELDS1 = {
    title: 'טיסות לחוייל',
    dataList: [
        {id: 1, text: 'טיסות לברלין'},
        {id: 2, text: 'טיסות לפריז'},
        {id: 3, text: 'טיסות לכרתים'},
        {id: 4, text: 'טיסות ללונדון'},
        {id: 5, text: 'טיסות לפראג'},
    ]
};
const FIELDS2 = {
    title: 'נופש למשפחות',
    dataList: [
        {id: 1, text: 'טיסות לברלין'},
        {id: 2, text: 'טיסות לפריז'},
        {id: 3, text: 'טיסות לכרתים'},
        {id: 4, text: 'טיסות ללונדון'},
        {id: 5, text: 'טיסות לפראג'},
    ]
};
const FIELDS3 = {
    title: 'נופש לזורגות',
    dataList: [
        {id: 1, text: 'טיסות לברלין'},
        {id: 2, text: 'טיסות לפריז'},
        {id: 3, text: 'טיסות לכרתים'},
        {id: 4, text: 'טיסות ללונדון'},
        {id: 5, text: 'טיסות לפראג'},
    ]
};
const FIELDS4 = {
    title: 'כללי',
    dataList: [
        {id: 1, text: 'צור קשר'},
        {id: 2, text: 'עלינו'},
        {id: 3, text: 'תנאים'},
        {id: 4, text: 'שירות לקוחות'},
    ]
};

const SIGNIFICATION_TEXT = 'Alray כל הזכויות שמורות 2018 ©';

export default function FooterComponent() {

    return (
        <div className="footerBox m-0 p-0">
            <div className="m-0 p-0 footerLogoBox">
                <div className="footerLogo"></div>
            </div>
            <div className="mainListBox m-0 p-0">
                <div className="listBoxSection col-md-6 col-lg-6 p-0 m-0">
                    <div className="col-md-6 col-lg-6 listBox">
                        <ListComponent data={FIELDS1}/>
                    </div>
                    <div  className="col-md-6 col-lg-6  listBox">
                        <ListComponent data={FIELDS2}/>
                    </div>
                </div>
               <div className="listBoxSection col-md-6 col-lg-6 p-0 m-0">
                   <div  className="col-md-6 col-lg-6  listBox">
                       <ListComponent data={FIELDS3}/>
                   </div>
                   <div  className="col-md-6 col-lg-6  listBox">
                       <ListComponent data={FIELDS4}/>
                   </div>
               </div>
            </div>
            <div className="socialBox">
                <div className="socialBtnBox">
                    <SocialFollowComponent/>
                </div>
                <div className="defaultFontFooter">{SIGNIFICATION_TEXT}</div>
            </div>
        </div>
    )
}
