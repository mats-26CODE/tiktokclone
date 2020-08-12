import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

//component imports 📁
import './VideoFooter.css';

function VideoFooter({ channel, description, song }) {
    return (
        <div className={"video_footer"}>
            <div className={"videofooter_text"}>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className={"videofooter_ticker"}>
                    <MusicNoteIcon className={"videofooter_icon"} />
                    <Ticker mode={"smooth"}>
                        {({ index }) => (
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div> 
            </div>

            <img 
                className={"videofooter_disc"}
                src="https://static.thenounproject.com/png/934821-200.png" alt="disc spinner"
            />
        </div>
    );
}

export default VideoFooter
