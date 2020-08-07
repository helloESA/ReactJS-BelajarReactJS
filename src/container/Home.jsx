import React, { Component } from 'react';
import YoutubeComponent from '../component/YoutubeComponent/YoutubeComponent';

class Home extends Component {
    render() {
        return (
            <div>
                <p>Youtube Component Static</p>
                <hr />
                <YoutubeComponent
                    time="09.12"
                    title="Iseng Ngoding Session 4 - ReactJS Part 1"
                    desc="9k ditonton, 2 jam yang lalu" />
                <YoutubeComponent
                    time="06.12"
                    title="Iseng Ngoding Session 4 - ReactJS Part 2"
                    desc="300 ditonton, 4 hari yang lalu" />
                <YoutubeComponent
                    time="09.00"
                    title="Iseng Ngoding Session 4 - ReactJS Part 3"
                    desc="99 ditonton, 5 hari yang lalu" />
                <YoutubeComponent
                    time="10.42"
                    title="Iseng Ngoding Session 4 - ReactJS Part 4"
                    desc="90 ditonton, 6 hari yang lalu" />
                <YoutubeComponent />
            </div>
        );
    }
}

export default Home;