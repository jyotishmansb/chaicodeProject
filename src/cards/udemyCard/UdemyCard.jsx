
// import uimage from '../../assets/images/udemy.jpg'

const UdemyCard = ({title, desc,rating,udemyImg}) => {
  return (
    <article className="udemy-course-wrapper">
      <div className="text">
        <p className="course-title">{title}</p>
        <p className="course-desc">{desc}</p>
        <div className="rating-box">
          <span className="rating">{rating}</span>
        </div>

      </div>
      <div className="image">
        <img src={udemyImg} alt="udemy course image" />
      </div>
    </article>


  )
}

export default UdemyCard