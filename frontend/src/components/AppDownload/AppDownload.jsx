import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div>
        <div className="app-downlaod" id='app-download'>
            <p>For Better Experience Download <br/> Toamato App </p>
            <div className='app-download-platform'>
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />


                
            </div>
        </div>
      
    </div>
  )
}

export default AppDownload
