import React from 'react'
import Banner from '../Banner/Banner'
import RowPost from '../RowPost/RowPost'
import {action,orginals,horror} from '../../urls'
import Navbar from '../Navbar/Navbar'

function Content(props) {
  

  return (
    <div>
      <Navbar />
       
         
 <Banner/>
       <RowPost url={orginals} title={'Netflix Orginals'}/>
       <RowPost url={action} title={'Action'} isSmall/>
       <RowPost url={horror} title={'Horror'} isSmall/>   
    
       
    </div>
  )
}

export default Content