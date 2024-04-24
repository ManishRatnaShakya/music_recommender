import React, {Component} from 'react';

class RadioView extends Component {
    state = {
        radio: [{
            freq: '96.1 Mhz',
            title: "Kantipur FM",
            src: 'http://broadcast.radiokantipur.com:7248/stream'
        },
            {
                freq: '81.4 Mhz',
                title: "BBC Radio 1",
                src: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q'
            },
            {
                freq: '90.9 Mhz',
                title: "Ujjyalo Radio Network",
                src: "http://stream.zenolive.com/wtuvp08xq1duv"
            },
            {
                freq: '98.3',
                title: "Keeps FM",
                src: 'http://streaming.hamropatro.com:8385/;stream.mp3&13202692901'
            },
            {
                freq: '98.8',
                title: "RadioCity FM",
                src: 'http://onair.websoftitnepal.com:8006/;'
            },
            {
                freq: '97.9',
                title: "Image FM",
                src: 'http://streaming.hamropatro.com:8631/;stream.mp3'
            },
            {
                freq: '91.2',
                title: "Hits FM",
                src: 'https://usa15.fastcast4u.com/proxy/hitsfm912?mp=/1'
            },
            {
                freq: '',
                title: "BBC World Service",
                src: 'http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws_backup'
            }]
    }

    render() {
        return (
            <div style={{marginTop: '10%'}}>
                {this.state.radio.map((track) => (
                    <figure key={track.title}>
                        <figcaption>{track.title} {track.freq}
                        </figcaption>
                        <audio controls>
                            <source src={track.src} type="audio/wav"/>Your browser does not support the audio element.
                            </audio>
                    </figure>
                ))}
            </div>
        );
    }
}

export default RadioView;