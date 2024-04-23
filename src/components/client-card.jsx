import React from 'react'
import { styles } from '../util/style'

function Clientcard({logo}) {
  return (
    <div className={`flex ${styles.flexCenter} sm:min-w-[192px] min-[120px] m-5`}>
        <img src={logo} alt="logo" className='sm:w-[192px] w-[100px] object-contain' /> 
        </div>
  )
}

export default Clientcard