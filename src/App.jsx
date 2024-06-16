import { useState , useContext} from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About';
import { countercontext } from '../context/context';

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

function App () {
  const counter = useContext(countercontext)
  let pageSize = 20
  let a = 0
  // weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  let apiKey = "bae77cc1e98745049a4fab3b07d3b9ee"

  const [progress, setprogress] = useState(0)

  // state = {
  //   progress: 0
  // }
  const setProgress=(num)=>{
    setprogress(num)
  }

   let router = createBrowserRouter([
    
    {
      path: "/",
      element: <><Navbar/><News apiKey={apiKey} setProgress = {setProgress} category={"general"}pageSize = {pageSize} key={"f"+counter.page}/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/sports",
      element: <><Navbar/><News apiKey={apiKey} setProgress = {setProgress} category={"sports"}  key={"g"+counter.page} pageSize = {pageSize}/></>
    },
    {
      path: "/science",
      element: <><Navbar/><News apiKey={apiKey} setProgress = {setProgress} category={"science"} key={"a"+counter.page} pageSize = {pageSize}/></>
    },
    {
      path: "/technology",
      element: <><Navbar/><News apiKey={apiKey} setProgress = {setProgress} category={"technology"} key={"b"+counter.page} pageSize = {pageSize}/></>
    },
    {
      path: "/health",
      element: <><Navbar/><News apiKey={apiKey} setProgress = {setProgress} category={"health"} pageSize = {pageSize} key={"c"+counter.page}/></>
    },
    {
      path: "/bussiness",
      element: <><Navbar/><News apiKey={apiKey} setProgress = {setProgress} category={"Bussiness"} key={"d"+counter.page} pageSize = {pageSize}/></>
    },
    {
      path: "/entertainment",
      element: <><Navbar/><News apiKey={apiKey} setProgress = {setProgress} category={"entertainment"} pageSize = {pageSize} key={"e"+counter.page}/></>
    },

  ]);
  // render() {
    return (
      <div>
         <LoadingBar
        color='#f11946'
        progress={progress}
        />
       <RouterProvider router={router}/>
      </div>
    )
  }
//  }
export default App