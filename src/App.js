import React from "react"

class App extends React.Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json)
            .then(astronauts => this.setState({ astronauts }))
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.astronauts.map(astronaut => (
                        astronaut.name
                    ))}
                </p>
            </div>
        )
    }
}

export default App