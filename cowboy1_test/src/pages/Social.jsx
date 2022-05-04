import {socials} from "../data";
const Social = () => {
    const social = socials[2]
  return (
      <div className="social">
        <img src="../media/cowboytwo.jpg" alt="cowboy" className="postImg" />
          <h1 className="postTitle">{social.title}</h1>
          <p className="postDesc">{social.desc}</p>
          <p className="postLongDesc">{social.longDesc}</p>
      </div>
  )
}

export default Social;