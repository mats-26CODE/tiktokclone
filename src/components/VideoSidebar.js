import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className={"videoSidebar"}>
            <div className={"sidebar_button"}>
                {liked ? (
                    <FavoriteIcon style={{color: 'red'}} 
                        onClick = {e => setLiked(false)}
                    />
                ): (
                    <FavoriteBorderIcon 
                        onClick = {e => setLiked(true)}
                    />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>  
            <div className={"sidebar_button"}>
                <ChatBubbleIcon />
                <p>{messages}</p>
            </div>  
            <div className={"sidebar_button"}>
                <ShareIcon />
                <p>{shares}</p>
            </div>  
        </div>
    )
}

export default VideoSidebar
