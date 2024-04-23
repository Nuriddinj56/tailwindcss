import React from 'react'
import { styles } from '../util/style'
import { clients } from '../util/constants'
import Clientcard from './client-card'

function Clients() {
  return (
    <div className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
            <Clientcard key={client.id} logo={client.logo}/>
        ))}
        </div>
    </div>
  )
}

export default Clients