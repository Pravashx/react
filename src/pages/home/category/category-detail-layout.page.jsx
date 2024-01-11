import { Outlet } from "react-router-dom"
import {useParams, useSearchParams} from "react-router-dom"
import { useEffect } from "react"
import HomeHeader from "../header/home-header-component"

const CategoryDetailLayout =()=>{
    const params= useParams()
    const [query, setQuery] = useSearchParams()

    console.log(params)

    useEffect(()=>{
        console.log(query.get('price'))
    },[query, params])

    useEffect(()=>{
        //TODO: PRODUCT LIST
    },[])
    
    return(
        <>
        <button onClick={()=>{
            setQuery({
                price: "1000-10000"
            })
        }}>
            Price 1000 - 10000
        </button>

      <Outlet/>
        </>
    )
}

export default CategoryDetailLayout