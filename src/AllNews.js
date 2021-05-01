import React, { useEffect ,useState} from 'react';
import './style/AllNews.css';
import News from './News-content';

import {getStoryIdsNew,getStory} from './Serveices/Api';

const Newscontainer=()=>{
    
    const [storyIds,setStoryIds]=useState([]);
    useEffect(()=>{
        getStoryIdsNew().then(data =>setStoryIds(data.data.slice(0,30)));
        // console.log(setStoryIds)
    },[]);
    

    return(
        <div class='News-Container'>
            {storyIds.map(storyId=>{
                return <News storyId={storyId}></News>})
            }
                 
        </div>
    )

}
export default Newscontainer;