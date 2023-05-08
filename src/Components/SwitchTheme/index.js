import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default ({ theme }) => {
    const light = <MdLightMode title="Light theme" style={{ fill: "#eade0b", width: "25px", height: "auto" }} />
    const dark = <MdDarkMode title="Dark theme" style={{ fill: "#4a4a4a", width: "25px", height: "auto" }} />

    return <>{theme ? dark : light}</>
}