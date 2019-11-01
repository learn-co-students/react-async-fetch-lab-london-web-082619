// create your App component here
import React, { Component } from 'react'


class App extends Component {
    
    
    componentDidMount(){
        return fetch("http://api.open-notify.org/astros.json").then(res=>res.json())
            
        }
    

    render(){
        
        
    }
}

export default App 

