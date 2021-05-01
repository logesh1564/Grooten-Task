import React, { useEffect ,useState} from 'react';
import './style/AllNews.css';
import News from './News-content';

import {getStory, getStoryIdsTop} from './Serveices/Api';

const Newscontainer=()=>{
    
    const [storyIds,setStoryIds]=useState([]);
    useEffect(()=>{
        getStoryIdsTop().then(data =>setStoryIds(data.data.slice(0,30)));
        // console.log(setStoryIds)
    },[]);
    

    return(
        <div class='News-Container'>
            {storyIds.map(storyId=>{
                return <News storyId={storyId}></News>})}
                 {/* return <News title={value.title} by={value.by} kids={value.kids} score={value.score} time={value.time} type={value.type} url={value.url}></News>})} */}
        </div>
    )

}
export default Newscontainer;