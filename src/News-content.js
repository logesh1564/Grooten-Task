import React,{useState,useEffect,useContext} from 'react';
import './style/News-content.css';
import {getStory} from './Serveices/Api';
import {Link} from 'react-router-dom';
import {StateContext} from './StateProvider';

const Container=({storyId})=>{
    const [story,setStory]=useState({});
    useEffect(()=>{
        
        getStory(storyId).then(data=> data && data.url && setStory(data));
    },[]);

    
    const [comments,setComments]=useContext(StateContext);

    const addComments=()=>{
            setComments(story.kids);
            // alert(comments);
            // console.log(story.kids);
    }

    

    return(
        <div className='product'>
            <div className='product-info'>
                <p>{story.title}</p>
            </div>
            <div class='details'>
                <p className="product-price">
                    <strong>Posted:</strong>
                    <span>{new Date(story.time).getHours()} Hours</span>
                </p>
                <p className="product-timing">
                    <strong>Author:</strong>
                    <span>{story.by}</span>
                </p>
                
            </div>
            <Link to='/comments'>
                {/* {console.log(story.kids)} */}
                <p onClick={addComments}>View Comments</p>
            </Link>
            
                <a href={story.url} className='link'>View More</a>
                
                
        
        </div>
    )
}
export default Container;