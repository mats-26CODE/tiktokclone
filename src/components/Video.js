import React, { useRef, useState } from 'react';

//component imports 📁 
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
    //Video reference to play and pause without controls 🚀 
    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null); 

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className={"video"}>
            <video 
                className={"video_player"} 
                loop 
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            />
        
            {/* <VideoFooter /> */}
            <VideoFooter 
                channel={channel} 
                description={description} 
                song={song} 
            />
            
            {/* <VideoSidebar /> */}
            <VideoSidebar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}

export default Video
 