// create your App component here
import React from 'react'

class App extends React.Component{
    state ={
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(({people}) => this.setState({ people: people }))
        // .then(({people}) => this.setState({ people: people }))
        
    }
    render() {
        console.log(this.state.people)
        return (
            <div>
            {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
                {/* {this.state.people.map((person, index) => 
                    <h2 key={index}>{person.name}</h2>
                )} */}
            </div>
        )
    }
}
export default App