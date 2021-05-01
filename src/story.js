import React,{useState,useEffect} from 'react';
import {getStory} from './Serveices/Api';

export const Story =({storyId})=>{
    const [story,setStory]=useState({});
    useEffect(()=>{
        
        getStory(storyId).then(data=> data && data.url && setStory(data));
    },[]);
    console.log(story)
    return(<p>{JSON.stringify(story)}</p >)
}