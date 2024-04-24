import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import youtube from "../Youtube/apis/youtube";
import Searchbar from "../../component/SearchBar/Searchbar";


const KEY = 'AIzaSyBD5UAIh55mTmz9WvafIi91HPuox8IWMA8';

var videoSrc;
var video;

class AlbumDetail extends Component {
    state = {
        tracks: [],
        album: {},
        videos: [],
        video: '',
        ytplayer: false,
        f: true,
        message: ''
    };


    componentDidMount() {
        console.log(this.props.match.params.id)
        axios({
            "method": "GET",
            "url": "https://deezerdevs-deezer.p.rapidapi.com/album/" + this.props.match.params.id,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "83a625aec2msh726dabaf81d700cp17962fjsn1ce43bc6aff4"
            }
        })
            .then((response) => {
                console.log(response)
                this.setState({album: response.data, tracks: response.data.tracks.data})
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
                <div className="track" id="ca" onLoad={window.scroll(0, 730)}>
                    <div className="trackb">
                        <img className="alb" src={this.state.album.cover_big} height={'200px'} width={'200px'}></img>
                        <h1>Album: {this.state.album.title}</h1>
                        <h3>Released on: {this.state.album.release_date}</h3>
                        <div className={'ytplayer'}>
                            {this.state.ytplayer && this.renderPlayer()}
                        </div>
                    </div>
                    <div className="trackc">
                        {this.renderTracks()}
                    </div>
                </div>
            </>
        )
    }

    addFavourite = (preview, artist_id, title, name) => {
        const albumname = this.state.album.title
        const albumid = this.state.album.id
        console.log(sessionStorage.getItem('userid')+ '&preview=' + preview + '&track_title=' + title + '&artist_id=' + artist_id + '&artist_name=' + name.split(" ").join("%20") + '&album_name=' + albumname.split(" ").join("%20") + '&album_id=' + albumid)
        fetch('http://localhost/check_favourite?uid=' + sessionStorage.getItem('userid') + '&preview=' + preview + '&track_title=' + title.split(" ").join("%20") + '&artist_id=' + artist_id + '&artist_name=' + name.split(" ").join("%20") + '&album_name=' + albumname.split(" ").join("%20") + '&album_id=' + albumid)
            .then(response => response.json())
            .then(response => this.setState({f: response.flag}))
            .then( () => this.redirectUser(preview, title, artist_id, name, albumname, albumid))
            .catch(err => console.error(err.toString()))
    }

    redirectUser = (preview, title, artist_id, name, albumname, albumid) => {
        console.log(this.state.f)
        if (this.state.f) {
            fetch('http://localhost/add_favourite?uid=' + sessionStorage.getItem('userid') + '&preview=' + preview + '&track_title=' + title.split(" ").join("%20") + '&artist_id=' + artist_id + '&artist_name=' + name.split(" ").join("%20") + '&album_name=' + albumname.split(" ").join("%20") + '&album_id=' + albumid)
                .then(response => response.json())
                .then(response => this.setState({message: response.msg}))
                .then(response => console.log(response))
                .then(this.alertmessage)
                .catch(err => console.error(err.toString()))
        } else {
            alert("Music already added to favourite!")
        }
    }

    alertmessage = () => {
        alert(this.state.message)
    }

    showLyrics = async (title) => {
        const response = await youtube.get('/search', {
            params: {
                q: title + " lyrics",
                part: 'snippet',
                maxResults: 1,
                key: KEY
            }
        })
        console.log(response)
        this.setState({
            videos: response.data.items
        })
        video = this.state.videos[0]
        videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        this.setState({ytplayer: true})
        console.log(videoSrc)

    }

    renderPlayer() {
        return (
            <div className={'ytplayer'}>
                {console.log('ytplayer')}
                <div className='ui embed'>
                    <iframe src={videoSrc} allowFullScreen title='Video player' autoPlay='1' width={'540px'}
                            height={'360px'}/>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>

        )
    }

    renderTracks() {
        return (
            <div>
                {this.state.tracks.map((track) => (
                    <figure key={track.title}>
                        <figcaption>{track.title}
                            {sessionStorage.getItem('token') ?
                                <button onClick={() => this.showLyrics(track.title)}> Show Lyrics Video</button> : ""}
                            {sessionStorage.getItem('token') ?
                                <img src={'https://i.ya-webdesign.com/images/star-outline-png-2.png'} height={'50px'}
                                     width={'50px'}
                                     onClick={() => this.addFavourite(track.preview, track.artist.id, track.title, track.artist.name)}/> : ""}
                        </figcaption>
                        <audio
                            controls
                            src={track.preview}>
                        </audio>
                    </figure>
                ))}
            </div>
        )
    }
}

export default AlbumDetail;