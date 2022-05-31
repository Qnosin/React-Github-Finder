import React from 'react'
import {useState} from 'react';
import { useContext } from 'react';
import { dataContext } from '../helper/SearchContext';
import Footercomp from './Footercomp';

function Main() {
    const {login,loadingValues,avatar,location,bio,url,name} = useContext(dataContext);
    const [isLoading,setIsLoading] = useState(true);
    let avatarDisplay =  <img onLoad={()=> setIsLoading(false)} src={avatar} alt='avatar'></img>
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
                        {isLoading && <div>Loading</div>}
                        {bio === '' && name === '' && location === '' ? 
                        <div className='Error'>User Not Found :C</div> 
                        :
                        <>
                        <div className='avatar__box' onClick={ ()=> clickHandler(url)}>{avatarDisplay}</div>
                         <div className='avatar__box__description'>
                            <p>Login: {login}</p>
                            <p>Github Name: {name}</p>
                            <p>Bio: {bio}</p>
                            <p>Location: {location}</p>
                          </div> 
                          </>
                        }
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