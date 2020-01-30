import React , { Component } from 'react'
import Banner from '../components/banner'
import ArtistsList from '../components/artistsList'

// REQUESTS URL
const URL_ARTIST = 'http://localhost:3005/artists'

class Home extends Component {

    constructor (props){
        super(props);

        this.state = {
            artist:''
        }
    }

    // react Lifecycle -> componentDidMount() is invoked immediately after a component is mounted 
    // https://reactjs.org/docs/react-component.html

    componentDidMount(){

        fetch(URL_ARTIST,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json =>{
            console.log(json);
            this.setState({
                artist:json
            })
        })
    }

    render(){
        return (
            <div>
                <Banner/>
                <ArtistsList allArtists={this.state.artist}/>
            </div>
        )
      
    }
}

export default Home;