import React from 'react'
import {useContext} from 'react';
import { SearchContext } from '../helper/SearchContext';
import { UndrawSearch } from 'react-undraw-illustrations';
function Search() {
    const {inputValue, SetinputValue,loadingValues,setloadingValues} = useContext(SearchContext);
    const handleChange = (e) =>{
        e.preventDefault();
        SetinputValue(e.target.value);
        setloadingValues(true);
        if(e.target.value === ""){
            setloadingValues(false);
        }
    }
  return (
      <section className='Search__component'>
         <UndrawSearch></UndrawSearch>
        <h1>Find your favorite github Profile!</h1>
            <input onChange={handleChange}  defaultValue={inputValue} type={'text'} placeholder='type nickname'></input>
    </section>   
  )
}

export default Search