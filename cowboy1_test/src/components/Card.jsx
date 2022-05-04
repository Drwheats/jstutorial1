const Card = ({social}) => {
  return (
      <div>
          <span className="title">{social.title}</span>
          <img src={social.img} alt="" className="img" />
          <p className="desc">{social.desc}</p>
          <button className="cardButton">Click here</button>
      </div>
  )
}

export default Card;