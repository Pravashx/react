import React from "react"

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        // State Create
        this.state = {
            title: null,
            content: null
        }
        console.log("I am constructor")
    }

    componentDidMount = () => {
        // API Call
        setTimeout(()=>{
            this.setState({
                ...this.state,
                title: "Home Page",
                content: "I am a dummy Contenet"
            })
        }, 3000)
        
        console.log("I am ComponentDidMount")
    }

    componentDidUpdate = ()=>{
        console.log('I am componentDidUpdate')
    }

    increaseValue = () =>{

    
    }

    componentWillUnmount= ()=>{
        console.log('Im on componentWillUnmount')
    }
    
    render = () => {
        console.log("Im render")
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    {this.state.content}
                </div>
            </div>
        )
    }
}


export default HomePage;