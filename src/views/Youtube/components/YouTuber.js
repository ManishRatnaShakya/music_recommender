import React, {Component} from 'react';

class YouTuber extends Component {


    render() {
        return (
            <div>
                GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I HTTP/1.1

                Authorization: Bearer [YOUR_ACCESS_TOKEN]
                Accept: application/json

            </div>
        );
    }
}

export default YouTuber;