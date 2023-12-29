import { useEffect, useState } from "react"
import { ButtonComponent } from "../../../component/common/button/button.component"
import { H1, Heading } from "../../../component/common/heading/heading.component"
import "./home.page.css"
import { Col, Container, Row } from "react-bootstrap"
// import loginPage from "../auth/login"

const HomePage = () => {

    const [title, setTitle]= useState("Default Value")
    const [loading, setLoading] = useState()
    let [counter, setCounter]= useState(0)

    const clickListen = ()=>{
        setTitle("Updated Page Title")
        setLoading(false)
        console.log("I have been clicked")
    }

    // useEffect(()=>{
    //     //This hook executes on any state change of this component
    //     console.log("I am always called")
    // })
    useEffect(()=>{
        //This hook only executes for the first time when this component is loaded
        console.log("I am once called")
        setLoading(true)
    },[])

    useEffect(()=>{
        //This hook only calls when there is change on title state
        console.log("I am only called when title gets changed")
    },[title, loading])

    const increaseCount=(e)=>{
        setCounter(++counter)
        console.log(counter)
    }
        
    

    return (
        <>
      <div className="Heading">
        
      </div>
        {/* <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Welcome Sir</h1>
                </div>
            </div>
        </div>

        <Container fluid as={'section'}>
            <Row>
                <Col sm={12}>
                <h1 className="text-center">Welcome There Sir</h1>
                
                </Col>
            </Row>
        </Container>
         */}
        <p className="firstpara" style={{backgroundColor:"Gray"}}>Clicked For: {counter}</p>
        <button onClick={increaseCount}>Click Here</button>
           <H1 value={title}></H1>
            <Heading type= "h1" value= {title}/>
            <ButtonComponent clickEvent = {clickListen} type= {'button'} label={"Click me"}/>
            <ButtonComponent type= {'reset'} label={"Cancel"}/>
            <ButtonComponent type= {'submit'} label={"Login"}/>
            <ButtonComponent type= {'submit'} label={"Sumit"}/>
            <ButtonComponent type= {'submit'} label={"Register"}/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis consequatur maiores eaque laudantium libero harum, aliquid perferendis in magni vel quisquam maxime ad repellat iusto nulla ducimus omnis! Vitae.</p>
            <loginPage/>
        </>
    )
}

// const ButtonComponent = ({label, type, onClick})=>{
//     return(<button type={type} onClick= {onClick}>
//         <ButtonLabel label = {label}></ButtonLabel>
//     </button>)
// }

// const ButtonLabel = ({label})=>{
//     return(
//         <strong>
//             {label}
//         </strong>
//     )
// }
export default HomePage