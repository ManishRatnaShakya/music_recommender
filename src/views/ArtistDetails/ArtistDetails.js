import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class ArtistDetails extends Component {
    state = {
        artist: [],
        album: [],
        keyword: '',
        previewid: ''
    };

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios({
            "method": "GET",
            "url": "https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.match.params.id,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "83a625aec2msh726dabaf81d700cp17962fjsn1ce43bc6aff4"
            }
        })
            .then((response) => {
                console.log(response)
                this.setState({artist: response.data, keyword: response.data.name})
            })
            .then(this.getTracks)
            .catch((error) => {
                console.log(error)
            })

    }

    componentWillUnmount() {
    }

    getTracks = () => {
        axios({
            "method": "GET",
            "url": "https://deezerdevs-deezer.p.rapidapi.com/search/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "83a625aec2msh726dabaf81d700cp17962fjsn1ce43bc6aff4"
            }, "params": {
                "q": "" + this.state.keyword
            }
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    album: response.data.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <div class='content'>
                    <img src={this.state.artist.picture_medium}></img>
                    <h3>Artist Name:</h3><br/><h1>{this.state.artist.name}</h1>
                </div>
                <div>
                    {this.renderTracks()}
                </div>
            </div>

        )
    }

    addFavourite = (preview) => {
        fetch('http://localhost:4000/add_favourite?preview=' + this.state.previewid)
            .then(response => response.json())
            .catch(err => console.error(err.toString()))
    }

    renderTracks() {
        return (
            <div className="content">
                <div className="movie-list">
                    {console.log(this.state.album)}
                    {this.state.album.map((album) => (
                        <div key={album.id} className="movie">
                            <img src={album.album.cover_medium} alt=""/>
                            <div className="movie-title">
                                <Link to={'/details/' + album.album.id}>{album.title}</Link>
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
        )
    }
}

export default ArtistDetails;