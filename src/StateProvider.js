// import { Category } from '@material-ui/icons';
import React,{createContext,useState} from 'react';

export const StateContext=createContext();

export const StateProvider = ({children})=>{
    
    const[comments,setComments]=useState([]);
    const[]=useState([]);
    return <StateContext.Provider value={[comments,setComments]}>
        {children}
    </StateContext.Provider>
}
