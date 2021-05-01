import axios from 'axios';

export const baseurl='https://hacker-news.firebaseio.com/v0/';

export const newStoriesUrl=`${baseurl}newstories.json`;
export const newStoriesUrlBest=`${baseurl}beststories.json`;
export const storyUrl=`${baseurl}item/`;

export const getStory=async (storyId)=>{
    const result=await axios.get(`${storyUrl+storyId}.json`).then(({data})=>data);
    // console.log(result);
    return result;
}

export const getStoryIdsNew= async ()=>{
    const result=await axios.get(newStoriesUrl).then(data=>data);
    // console.log(result);
    return result;
}

export const getStoryIdsBest= async ()=>{
    const result=await axios.get(newStoriesUrlBest).then(data=>data);
    // console.log(result);
    return result;
}

export const getStoryIdsTop= async ()=>{
    const result=await axios.get(newStoriesUrlBest).then(data=>data);
    // console.log(result);
    return result;
}
