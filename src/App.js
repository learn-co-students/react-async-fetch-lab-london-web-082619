// create your App component here
import React from 'react';

class App extends React.Component {

    // let function get(url) {
    //     return fetch(url).then(resp => resp.json())
    // }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
    }

    render() {

        return (
            <div>THIS IS THE APP COMPONENT</div>
        )
    }
}


export default App;