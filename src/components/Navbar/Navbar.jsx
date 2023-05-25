import React,{useContext} from 'react'
import '../Navbar/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../../store/Context'
// import Search from '../search'
// import Result from '../Result'
function Navbar() {
  
  const navigate=useNavigate()
  const Logout=()=>{
    firebase.auth().signOut()
    navigate('/')
  }
  const signin=()=>{
    navigate('/signin')
  }
  const{user}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
 

  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        
        <img className='avatar' src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="avatar" />
        <span className='user'>{user? user.displayName : 'user'}</span>
        <button className='btnsign' onClick={user ? Logout : signin}>{user ? 'Logout' :'Sign In'}</button>
    </div>
  )
}

export default Navbar