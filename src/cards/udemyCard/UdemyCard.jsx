import React from 'react'
import udemyPic from '../../assets/images/udemy.jpg'

const UdemyCard = ({image,rating}) => {
  return (
    <div className="udemy-course-wrapper">
                    <div className="text">
                        <div className="course-title"><p>Complete web dev course</p></div>
                        <div className="course-desc"><p>Only web development course that you will need.
                            Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc</p></div>
                   <div className="rating-box"> 
                   <div className="rating">{rating}</div>
                   </div>
                   
                    </div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                </div>


  )
}

export default UdemyCard