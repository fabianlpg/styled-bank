import React from "react";
import { IoFastFoodSharp, IoCarSportSharp } from "react-icons/io5";
import { GiHealthIncrease } from "react-icons/gi";
import { SiHomeassistant } from "react-icons/si";
import { HiSquaresPlus } from "react-icons/hi2";
import "./ImageFilter.css"

export default (type, theme) => {
    const Images = {
        Alimentos: <IoFastFoodSharp className="icon-type" title={`Icono de ${type}`} />,
        Servicios: <SiHomeassistant className="icon-type" title={`Icono de ${type}`} />,
        Salud: <GiHealthIncrease className="icon-type" title={`Icono de ${type}`} />,
        Transporte: <IoCarSportSharp className="icon-type" title={`Icono de ${type}`} />,
        default: <HiSquaresPlus className="icon-type" title={`Icono de Otros`} />
    }
    const ImagesDark = {
        Alimentos: <IoFastFoodSharp className="icon-type-dark" title={`Icono de ${type}`} />,
        Servicios: <SiHomeassistant className="icon-type-dark" title={`Icono de ${type}`} />,
        Salud: <GiHealthIncrease className="icon-type-dark" title={`Icono de ${type}`} />,
        Transporte: <IoCarSportSharp className="icon-type-dark" title={`Icono de ${type}`} />,
        default: <HiSquaresPlus className="icon-type-dark" title={`Icono de Otros`} />
    }

    return theme ? Images[type] || Images["default"] : ImagesDark[type] || ImagesDark["default"];
}