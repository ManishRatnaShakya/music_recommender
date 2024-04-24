import React, {Component} from 'react';
import youtube from "../Youtube/apis/youtube";
import {Link} from 'react-router-dom'

const KEY = 'AIzaSyBD5UAIh55mTmz9WvafIi91HPuox8IWMA8';
var videoSrc;
var video;

class Favourite extends Component {
    state = {
        favourites: [],
        videos: [],
        video: '',
        ytplayer: false,
        message: ''
    }
    requestFavourite = () => {
        fetch('http://localhost:4000/request_favourite?uid=' + sessionStorage.getItem('userid'))
            .then(response => response.json())
            .then(response => this.setState({favourites: response.data}))
            .catch(err => console.error(err.toString()))
    }
    removeFavourite = (id) => {
        fetch('http://localhost:4000/remove_favourite?id=' + id)
            .then(response => response.json())
            .then(response => this.setState({message: response.msg}))
            .then(this.alertMessage)
            .catch(err => console.error(err.toString()))
    }
    alertMessage = () => {
        alert(this.state.message)
    }
    componentWillUnmount() {
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
                    <iframe src={videoSrc} allowFullScreen title='Video player'/>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>

        )
    }

    render() {
        this.requestFavourite()
        const tracks = this.state.favourites
        return (
            <div style={{marginTop: '20%'}}>
                <div className="bottom-content">
                    {this.state.ytplayer && this.renderPlayer()}
                </div>
                {tracks.map((track) => (
                    <div className={'content'} key={track.id}>
                        <div className="top-content">
                            <div className={'albuminfo'}>
                                <div className={'albumname'}>Album:<Link
                                    to={'/details/' + track.album_id}> {track.album_name}</Link></div>
                                <div className={'artistname'}>Artist: <Link
                                    to={'/detailsartist/' + track.artist_id}>{track.artist_name}</Link></div>
                            </div>
                            <div className="remove-favourite" onClick={() => {
                                this.removeFavourite(track.id)
                            }}>Remove from favourite
                            </div>
                            <div className={'nameplayer'}>
                                <div className={'track_name'}>
                                    <div className={'track_player'}>
                                        {track.track_title}
                                        <button onClick={() => this.showLyrics(track.track_title)}> Show Lyrics
                                            Video
                                        </button>
                                        <figure>
                                            <figcaption>

                                            </figcaption>
                                            <audio
                                                controls
                                                src={track.preview}>
                                            </audio>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Favourite;