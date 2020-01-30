import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter , Route } from 'react-router-dom'

// Components

import Home from './components/home'
import Artist from './components/artist'

// Statless component
const App = () =>{
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/artist/:artistid" component={Artist}></Route>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))