import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Searchbar from "../../component/SearchBar/Searchbar";

class Artists extends Component {
    state = {
        artist: [],
        flag: true,
        keyword: ''
    };

    componentDidMount() {
        for (var i = 1; i < 53; i++) {
            this.fetchArtist(Math.floor(Math.random() * (+9000 - +1)) + +1)
            //this.state.artist.push(this.state.artist)
        }
    }

    fetchArtist = (i) => {
        axios({
            "method": "GET",
            "url": "https://deezerdevs-deezer.p.rapidapi.com/artist/" + i,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "83a625aec2msh726dabaf81d700cp17962fjsn1ce43bc6aff4"
            }
        })
            .then((response) => {
                this.state.artist.push(response.data)
            })
            .then((response) => {
                this.setState({
                    flag: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <div className="searchhome">
                    <Searchbar/>
                </div>
                <div className="content">
                    <div className="movie-list">
                        {this.state.artist.map((artist) => (
                            <div key={artist.id} className="movie">
                                <img src={artist.picture_medium} alt=""/>
                                <div className="movie-title">
                                    <Link to={'/detailsartist/' + artist.id}>{artist.name}</Link>
                                </div>
                            </div>
                        ))}
                        <figure>
                            <audio
                                src="https://cdns-preview-3.dzcdn.net/stream/c-3aecca9907d53fa844c1f7f6bb0d5972-6.mp3">
                            </audio>
                        </figure>
                    </div>
                </div>
            </>
        )
    }
}

export default Artists;