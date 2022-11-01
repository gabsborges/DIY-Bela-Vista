import React from "react";
import '../App.css';
import ObrigadoFooter from "../Components/Obrigado/ObrigadoFooter/ObrigadoFooter";
import ObrigadoHeader from "../Components/Obrigado/ObrigadoHeader/ObrigadoHeader";
import ObrigadoMainSection from "../Components/Obrigado/ObrigadoMainSection/ObrigadoMainSection";

function Obrigado() {
    return (
        <div className="obrigado">
            <ObrigadoHeader/>
            <ObrigadoMainSection/>
            <ObrigadoFooter/>
        </div>
    )
}

export default Obrigado