import React from 'react'
import './featured.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
const Feature = () => {
  return (
    <>
      <div className="container">
        <div className='featured'>
        <div className="featured_container">
        <div className="info">
                    <img src="https://www.whats-on-netflix.com/wp-content/uploads/2021/08/money-heist-experience-what-you-need-to-know-scaled.jpg" alt="" />
                    <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem rerum dolorem est fugiat at non voluptates suscipit, commodi nesciunt ullam quia magnam, quasi qui corrupti laborum consequatur? Saepe magni, ut iure aspernatur neque eos eveniet incidunt quia, impedit delectus repellendus facilis repudiandae ex unde. Minima consectetur maxime eaque adipisci possimus fugit nesciunt quos a?</span>
                    <div className="buttons">
                        <button className='play'> <PlayArrowIcon /> <span>Play</span> </button>
                        <button className='more'> <QuestionMarkIcon /> <span>Info</span> </button>
                    </div>
                </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Feature
