import React, {Component} from "react";
import kr from '../../assets/images/kr.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Searchbar from "../../component/SearchBar/Searchbar";

class Home extends Component {
    state = {
        album: [],
        keyword: ""
    };

    inputHandler = (val) => (
        this.setState({keyword: val})
    );

    componentDidMount() {
        axios({
            "method": "GET",
            "url": "https://deezerdevs-deezer.p.rapidapi.com/search/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "83a625aec2msh726dabaf81d700cp17962fjsn1ce43bc6aff4"
            }, "params": {
                "q": "Linkin Park"
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
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="equilizer" viewBox="0 0 128 128">
                    <g>
                        <title>Audio Equilizer</title>
                        <rect className="bar" transform="translate(0,0)" y="15"></rect>
                        <rect className="bar" transform="translate(25,0)" y="15"></rect>
                        <rect className="bar" transform="translate(50,0)" y="15"></rect>
                        <rect className="bar" transform="translate(75,0)" y="15"></rect>
                        <rect className="bar" transform="translate(100,0)" y="15"></rect>
                    </g>
                </svg>
                <div className="logox">Tune-it!</div>
                {/*<SideNavItems items={this.props.navItem}/>*/}
                <br/>
                <input type="text" onChange={(e) => this.inputHandler(e.target.value)} name='search'
                       placeholder="Type To Search..."/>
                <Link to={'/search/' + this.state.keyword}><br/><br/>
                    <button className="search">Search</button>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <a className="talajane" href="#ca"></a>

                <div className="searchhome">
                    <Searchbar/>
                </div>
                <div className="content">

                    <div className="movie-list">
                        {console.log(this.state.album)}
                        {this.state.album.map((album) => (
                            <div className="movie" key={album.album.id + Math.random()}>
                                <Link to={'/details/' + album.album.id}><img src={album.album.cover_medium}
                                                                             alt=""/></Link>
                                <div className="movie-title" style={{fontSize: '1'}}>
                                    <Link to={'/details/' + album.album.id}>{album.title}</Link><br/>
                                    <Link to={'/details/' + album.album.id}>Album: {album.album.title}</Link><br/>
                                    <Link to={'/detailsartist/' + album.artist.id}>Artist: {album.artist.name}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Home;