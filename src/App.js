//imports

import Search from './components/Search';
import { useState,useEffect } from 'react';
import { SearchContext } from './helper/SearchContext';
import { dataContext } from './helper/SearchContext';
import Main from './components/Main';
import Footercomp from './components/Footercomp';

//
function App() {
  //all states need for app
  const [inputValue,SetinputValue] = useState("");
  const [avatar,setavatar] = useState("");
  const [location,Setlocation] = useState("");
  const [bio,setBio] = useState("");
  const [url,setUrl] = useState("");
  const [name,setName] = useState("");
  const [login,setLogin] = useState("");
  const [loadingValues,setloadingValues] = useState(false);

  //variables to store the data needed for context provider
  let values = {login,loadingValues,avatar,location,bio,url,setUrl,name,setName,setavatar,Setlocation,setBio,setLogin,setloadingValues};

  //async function to get the data
  async function getData(value){
    const fetchData = fetch(`https://api.github.com/users/${value}`, {
      headers: {
        Authorization: "Basic UW5vc2luOmdocF9jMzlTSk9KM09yajcxVFVXM2MwMUtlWkkwR0s4ZWkwZm45NTA="
      }
    })
    await fetchData
    const data = (await fetchData).json();
    await data
    return data
  }

  //Waitng for changing the data
  useEffect(()=>{
    getData(inputValue).then((data)=>{
      setTimeout(()=>{
        console.log(data);
        setName(data.name);
        setUrl(data.html_url);
        setavatar(data.avatar_url)
        Setlocation(data.location)
        setLogin(data.login)
        setBio(data.bio)
      },200)
    }
    )
  },[inputValue])


  return (
    <div className="App">
      <SearchContext.Provider value={{inputValue,SetinputValue,loadingValues,setloadingValues}}>
      <Search></Search>
      <dataContext.Provider value={values}>
        <Main></Main>
      </dataContext.Provider> 
      </SearchContext.Provider>
    </div>
  );
}

export default App;
