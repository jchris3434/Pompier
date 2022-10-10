import React from "react";
import MyContext from "../contexts/MyContext";
export default function CmpTwo(props) {

    const context = React.useContext(MyContext);
    console.log(context);

    return (
    <div>
        <p> 2eme composant by JC </p>
        <p>{props.tutu}</p>
    </div>
    );
}