import React from "react"
export const ButtonComponent= ({label= "submit", type="submit", clickEvent})=>{
    return(
        <React.Fragment>
        <button type = {type} onClick={clickEvent}>
            {label}
        </button>
        </React.Fragment>
    )
}