import React from "react"
export const ButtonComponent= ({label= "submit",loading= false, className="btn-success", type="submit"})=>{
    return(
        <React.Fragment>
        <button type = {type} className={`btn btn-sm ${className}`} disabled={loading}>
            {
                (type === 'reset')? <i className="fa fa-undo me-2"></i>: ((type === 'submit') ? <i className="fa fa-paper-plane me-2"></i>: "")
            }
            {label}
        </button>
        </React.Fragment>
    )
}