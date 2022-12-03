import React from 'react'
import landing from './../assets/image/landing.jpg'
import backgroundVideo from './../assets/image/videos/background.mp4'

const LandingPage = () => {
    return (
        <div className='main-image'>
            {/* <img src={landing} alt="landingPage image" className='demo-image' /> */}
            <video src={backgroundVideo} autoPlay loop muted />
            <div className='heading'>
                <div>
                    WEL-COME
                </div>
                <div>
                    My Web Resume
                </div>
            </div>
        </div>
    )
}

export default LandingPage;