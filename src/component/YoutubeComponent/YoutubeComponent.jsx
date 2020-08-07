import React from 'react';
import './YoutubeComponent.css'

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://avatars1.githubusercontent.com/u/57313560?s=460&u=c8dd795edf462f1488228a22cacca1f4be5bfa1a&v=4" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: '00.00',
    title: 'Your Title Here (Your Sub Title here)',
    desc: '0 ditonton, 0 menit yang lalu'
}

export default YoutubeComponent;