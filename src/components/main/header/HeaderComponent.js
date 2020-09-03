import React from "react";
import './HeaderComponent.css'

const CURRENCY = '$ USD';

export default function HeaderComponent () {
    return (
        <div className="headerContainer">
            <div className=" p-0 m-0 myHeader">
                <div className="logo">
                </div>
                <div className="defaultFontHeader ml-1 mr-1 cursorPointer">{CURRENCY}</div>

            </div>
            <div className=" p-0 m-0 pageNav form-group">
                <div className="ml-1 mr-1 defaultFontHeader cursorPointer">דף הבית</div>
                <div className="ml-1 mr-1 cursorPointer">
                    <select className="form-control headerText form-control-sm specialFontHeader">
                        <option>חבילות נופש</option>
                        <option>חבילות נופש</option>
                        <option>חבילות נופש</option>
                    </select>
                </div>
                <div className="ml-1 mr-1 cursorPointer">
                    <select className="form-control form-control-sm transparentInput defaultFontHeader">
                        <option>טיסותדף הבית</option>
                        <option>טיסותדף הבית</option>
                        <option>טיסותדף הבית</option>
                    </select>
                </div>
                <div className="ml-1 mr-1 cursorPointer">
                    <select className="form-control form-control-sm transparentInput defaultFontHeader">
                        <option>טיולים האורגנים</option>
                        <option>טיולים האורגנים</option>
                        <option>טיולים האורגנים</option>
                    </select>
                </div>
                <div className="ml-1 mr-1  defaultFontHeader cursorPointer">צור קשר</div>
            </div>
        </div>
    )
}
