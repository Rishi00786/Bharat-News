import { useState, useContext } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { countercontext } from '../context/context';

function App() {
  const counter = useContext(countercontext);
  let pageSize = 20;
  let apiKey = "a30557ba24ca48e3b62413ef049647b8";

  const [progress, setprogress] = useState(0);

  const setProgress = (num) => {
    setprogress(num);
  };

  let router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><News apiKey={apiKey} setProgress={setProgress} category={"general"} country={'us'} pageSize={pageSize} key={"f" + counter.page}/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/sports",
      element: <><Navbar/><News apiKey={apiKey} country={'us'} setProgress={setProgress} category={"sports"} key={"g" + counter.page} pageSize={pageSize}/></>
    },
    {
      path: "/science",
      element: <><Navbar/><News apiKey={apiKey} country={'us'} setProgress={setProgress} category={"science"} key={"a" + counter.page} pageSize={pageSize}/></>
    },
    {
      path: "/technology",
      element: <><Navbar/><News apiKey={apiKey} setProgress={setProgress} category={"technology"} key={"b" + counter.page} pageSize={pageSize}/></>
    },
    {
      path: "/health",
      element: <><Navbar/><News apiKey={apiKey} country={'us'} setProgress={setProgress} category={"health"} pageSize={pageSize} key={"c" + counter.page}/></>
    },
    {
      path: "/bussiness", // Corrected spelling
      element: <><Navbar/><News apiKey={apiKey} country={'us'} setProgress={setProgress} category={"business"} key={"d" + counter.page} pageSize={pageSize}/></>
    },
    {
      path: "/entertainment",
      element: <><Navbar/><News apiKey={apiKey} country={'us'} setProgress={setProgress} category={"entertainment"} pageSize={pageSize} key={"e" + counter.page}/></>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
