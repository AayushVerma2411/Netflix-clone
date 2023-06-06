import React from 'react'
import logo from './Logonetflix.png'
import {Link} from 'react-router-dom'
import  {ImSearch} from 'react-icons/im'
const Header = () => {

  const func=()=>
  {

  }
  return (
    <nav className="header">
        <img src={logo} alt="logo" onClick={func} />

        <div>
         <Link to="/tvshows">Tvshows</Link>
         <Link to="/movies">Movies</Link>
         <Link to="/added">RecentlyAdded</Link>
         <Link to="/mylist">MyLIST</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header
