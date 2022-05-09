import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../helper/SearchContext';
import Footercomp from './Footercomp';

function Main() {
    const {login,loadingValues,avatar,location,bio,url,name,setName,setUrl,setavatar,Setlocation,setBio,setLogin,setloadingValues} = useContext(dataContext);
    let avatarDisplay =  <img src={avatar} alt='avatar picture'></img>
    const clickHandler = (url) =>{
        window.open(url,'_blank');
    }

    if(avatar === undefined){
        avatarDisplay = '';
    }
    if(loadingValues !== false){
        return (
            <>
            <main>
              <div className='avatar'>
                         <div className='avatar__box' onClick={ ()=> clickHandler(url)}>{avatarDisplay}</div> 
                          <p>{login}</p>
                          <p>{name}</p>
                          <p>{bio}</p>
                          <p>{location}</p>
                      </div>
            </main>
            <Footercomp></Footercomp>
            </>
        )
    }else{
        return(
            <h3>Waiting for input...</h3>
        )
    }
 
}

export default Main