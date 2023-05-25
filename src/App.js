import React, { useEffect,useContext } from 'react';
import './App.css';
import HomeBanner from './components/Banner/HomeBanner';

import Signin from './components/Signin/Signin';
import Content from './components/content/Content';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/Context';

function App(props) {
  const {setUser}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
})
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeBanner/>}/>
          </Routes>
          <Routes>
          <Route exact path='/signin' element={<Signin page={true}/>}/>
          </Routes>
          <Routes>
          <Route exact path='/register' element={<Signin page={false}/>}/>
          </Routes>
          <Routes>
          <Route exact path='/dashboard' element={<Content/>}/>
          </Routes>
       
      </Router>
     
        
      
    
    </>
  );
}

export default App;
