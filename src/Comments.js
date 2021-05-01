import React,{useEffect} from 'react';
import './style/comments.css';
import {useState,useContext} from 'react';
import {StateContext} from './StateProvider';
import {getStory} from './Serveices/Api';

const Comments = ()=>{
    const [comments]=useContext(StateContext);
    // const [Comments,setComments]=useState([]);
    

    const [story,setStory]=useState([]);
    useEffect(()=>{
        // comments.map((value)=>getStory(value).then(data=> setStory(data)));
        console.log(story);
    },[]);
    return(
        
        
        <div className='commentBox'>
            <div>
                <h2>Comments</h2>
            </div>
             <div className='comments'>
                    {/* { story.map( value=> <p>{value.text}</p> )  } */}
                    
            </div> 
        </div>
    )
}


export default Comments;