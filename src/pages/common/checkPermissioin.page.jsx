import {useState} from "react"
import { Navigate } from "react-router-dom";

const PermissionCheck = ({
    accessBy,
    Component
})=>{
    //TODO
    const [user, setUser] = useState({
        name: "Pravash Thakuri",
        role: "admin"
    })
    if(user.role === accessBy){
        return Component;
    }else{
        return<Navigate to={'/'+ user.role} />
    }
    return Component;
}

export default PermissionCheck