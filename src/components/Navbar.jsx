import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setPrompt } from '../counter/counterSlice'
// export class Navbar extends Component {

const Navbar = () => {

  const [txt, settxt] = useState("")

  const input = useRef()
  const prompt = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  const ValueOnChange=(e)=>{
    settxt(e.target.value)
    dispatch(setPrompt(input.current.value))
  }
  
  // render() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BharatNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-semibold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about" key="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-info" to="/sports" key="Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-info" to="/science" key="Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-info" to="/technology" key="Technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-info" to="/bussiness" key="Bussiness">Bussiness</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-info" to="/entertainment" key="Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-info" to="/health" key="Health">Health</Link>
              </li>
            </ul>
            <form name='search-bar' className="d-flex">
              <input className="form-control me-2 border-4 rounded-5 border-warning" onChange={ValueOnChange} type="search" placeholder="Search" value={txt} ref={input} aria-label="Search"/>
              </form>
          </div>
        </div>
      </nav>
    </div>
  )
  // }
}

export default Navbar
