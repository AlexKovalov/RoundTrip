import React from "react";
import './ListComponent.css'

export default function ListComponent(props) {
    return (
        <div className="myList">
            <h5 className="listTitle">{props.data.title}</h5>
            <ul className="defaultFontList">
                {props.data.dataList.map( field =>{
                    return <li key={field.id}>{field.text}</li>
                })}
            </ul>
        </div>
    )
}
