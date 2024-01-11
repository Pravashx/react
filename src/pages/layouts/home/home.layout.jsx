import { Outlet } from "react-router-dom"
import HomeHeader from "../../home/header/home-header-component"

const HomeLayout = ()=>{
    return(
        <>
        <HomeHeader/>
        <Outlet/>
        </>
    )
}

export default HomeLayout